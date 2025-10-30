export const prerender = false;
import type { APIRoute } from "astro";
import { Resend } from "resend";

const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;
const TO = import.meta.env.TO_EMAIL || "contact@initsource.co.uk";
const FROM = import.meta.env.FROM_EMAIL || "Init Source <no-reply@initsource.co.uk>";

export const POST: APIRoute = async ({ request }) => {
  const ct = (request.headers.get("content-type") || "").toLowerCase();

  let name = "", email = "", message = "", subject = "New lead from Init Source", next = "";

  try {
    if (!RESEND_API_KEY || RESEND_API_KEY === "your_resend_api_key_here") {
      console.error("[contact] Missing RESEND_API_KEY. Form submission cannot be delivered.");
      return json({ ok: false, error: "Email service not configured. Please try again later." }, 503);
    }

    const resend = new Resend(RESEND_API_KEY);

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
        return json({ ok: true }); // silently succeed for bots
      }
      name = String(form.get("name") || "");
      email = String(form.get("email") || "");
      message = String(form.get("message") || "");
      subject = String(form.get("_subject") || subject);
      next = String(form.get("_redirect") || "");
    }

    if (!name || !email || !message) return json({ ok: false, error: "Missing fields" }, 400);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ ok: false, error: "Invalid email" }, 400);

    await resend.emails.send({
      from: FROM,
      to: TO,
      reply_to: email,
      subject,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><b>Name:</b> ${esc(name)}<br/><b>Email:</b> ${esc(email)}</p><pre style="font:inherit;white-space:pre-wrap">${esc(message)}</pre>`
    });

    return json({ ok: true, redirect: next || "/thanks" });
  } catch (e: any) {
    return json({ ok: false, error: e?.message || "Server error" }, 500);
  }
};

function json(body: any, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" }
  });
}
function esc(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]!));
}
