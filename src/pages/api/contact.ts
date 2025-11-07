// src/pages/api/contact.ts

export const prerender = false;
import type { APIRoute } from "astro";
import { Resend } from "resend";

// --- UTILITY FUNCTIONS ---
function json(body: any, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" }
  });
}

function esc(s: string) {
  // Simple HTML entity escaping for security in the email body
  return s.replace(/[&<>"']/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c] || c));
}
// -------------------------

export const POST: APIRoute = async ({ request }) => {
    // Access environment variables robustly using process.env for Vercel runtime
    const API_KEY = process.env.RESEND_API_KEY;
    const TO = process.env.RESEND_TO_EMAIL || "contact@initsource.co.uk";
    const FROM = process.env.RESEND_FROM_EMAIL || "Init Source <no-reply@initsource.co.uk>";

    const ct = (request.headers.get("content-type") || "").toLowerCase();

    let name = "", email = "", message = "", subject = "New lead from Init Source", next = "";

    try {
        // 1. Critical Check: Ensure API key is present
        if (!API_KEY) { 
            console.error("[contact] CRITICAL: RESEND_API_KEY not found in Vercel environment.");
            // This is the source of your "Email service not configured" error
            return json({ ok: false, error: "Email service not configured. Please ensure Vercel environment variables are set." }, 503);
        }

        const resend = new Resend(API_KEY);

        // 2. Data Parsing (handles both JSON from fetch and standard FormData)
        if (ct.includes("application/json")) {
            const body = await request.json();
            name = String(body.name || "");
            email = String(body.email || "");
            message = String(body.message || "");
            subject = String(body._subject || subject);
            next = String(body._redirect || "");
        } else {
            const form = await request.formData();
            if ((form.get("_gotcha") as string)?.trim()) {
                return json({ ok: true }); // Honeypot trap: silently succeed for bots
            }
            name = String(form.get("name") || "");
            email = String(form.get("email") || "");
            message = String(form.get("message") || "");
            subject = String(form.get("_subject") || subject);
            next = String(form.get("_redirect") || "");
        }

        // 3. Validation
        if (!name || !email || !message) return json({ ok: false, error: "Missing fields" }, 400);
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ ok: false, error: "Invalid email address" }, 400);

        // 4. Send Email
        await resend.emails.send({
            from: FROM,
            to: TO,
            reply_to: email,
            subject: `[Init Source Lead] ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
            html: `<p><b>Name:</b> ${esc(name)}<br/><b>Email:</b> ${esc(email)}</p><pre style="font:inherit;white-space:pre-wrap;margin-top:10px">${esc(message)}</pre>`
        });

        // 5. Success
        return json({ ok: true, redirect: next || "/thanks" });

    } catch (e: any) {
        console.error("Contact API Route Error:", e);
        return json({ ok: false, error: e?.message || "Server error occurred during email transmission" }, 500);
    }
};