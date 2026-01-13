import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const RESEND_API_KEY = "re_GbLzBR4P_MP8r2ncfU68m8BM4QKFV8QLS";
const TO = "contact@initsource.co.uk";
const FROM = "Init Source <no-reply@initsource.co.uk>";
const RESERVED = /* @__PURE__ */ new Set(["_subject", "_redirect", "_gotcha"]);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1e3;
const RATE_LIMIT_MAX = 10;
const rateLimitBuckets = /* @__PURE__ */ new Map();
const MAX_FIELD_LENGTH = 500;
const MAX_MESSAGE_LENGTH = 4e3;
const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 200;
const POST = async ({ request }) => {
  const ct = (request.headers.get("content-type") || "").toLowerCase();
  let data = {};
  let subject = "New lead from Init Source";
  let next = "";
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
    if (!allowRequest(ip)) {
      return json({ ok: false, error: "Too many requests. Please try again soon." }, 429);
    }
    if (!RESEND_API_KEY || RESEND_API_KEY === "your_resend_api_key_here") ;
    const resend = new Resend(RESEND_API_KEY);
    if (ct.includes("application/json")) {
      const body = await request.json();
      data = normalize(body);
      subject = String(body._subject || subject);
      next = String(body._redirect || "");
    } else if (ct.includes("application/x-www-form-urlencoded") || ct.includes("multipart/form-data")) {
      const form = await request.formData();
      if (form.get("_gotcha")?.trim()) {
        return json({ ok: true });
      }
      data = normalize(Object.fromEntries(form.entries()));
      subject = String(form.get("_subject") || subject);
      next = String(form.get("_redirect") || "");
    } else {
      return json({ ok: false, error: "Unsupported content type" }, 415);
    }
    if (String(data._gotcha || "").trim()) {
      return json({ ok: true });
    }
    const type = String(data._type || data.type || "client");
    const name = String(data.name || "");
    const email = String(data.email || "");
    const message = String(data.message || "");
    if (!name || !email) return json({ ok: false, error: "Missing fields" }, 400);
    if (name.length > MAX_NAME_LENGTH || email.length > MAX_EMAIL_LENGTH) {
      return json({ ok: false, error: "Fields too long" }, 400);
    }
    if (!EMAIL_RE.test(email)) return json({ ok: false, error: "Invalid email" }, 400);
    if (type !== "candidate" && !message) return json({ ok: false, error: "Missing fields" }, 400);
    if (message && message.length > MAX_MESSAGE_LENGTH) {
      return json({ ok: false, error: "Message too long" }, 400);
    }
    if (type === "candidate" && !data.role_target) return json({ ok: false, error: "Missing fields" }, 400);
    const detailEntries = Object.entries(data).filter(([key, value]) => {
      if (RESERVED.has(key)) return false;
      if (["name", "email", "message", "_type", "type"].includes(key)) return false;
      return String(value || "").trim().length > 0;
    }).map(([key, value]) => [prettyLabel(key), String(value)]);
    const detailsText = detailEntries.map(([label, value]) => `${label}: ${value}`).join("\n");
    const detailsHtml = detailEntries.map(([label, value]) => `<li><b>${esc(label)}:</b> ${esc(value)}</li>`).join("");
    await resend.emails.send({
      from: FROM,
      to: TO,
      reply_to: email,
      subject: `${subject}${type ? ` (${type})` : ""}`,
      text: [
        `Type: ${type}`,
        `Name: ${name}`,
        `Email: ${email}`,
        detailsText ? `
${detailsText}` : "",
        message ? `
Message:
${message}` : ""
      ].filter(Boolean).join("\n"),
      html: `
        <p><b>Type:</b> ${esc(type)}</p>
        <p><b>Name:</b> ${esc(name)}<br/><b>Email:</b> ${esc(email)}</p>
        ${detailsHtml ? `<ul>${detailsHtml}</ul>` : ""}
        ${message ? `<pre style="font:inherit;white-space:pre-wrap">${esc(message)}</pre>` : ""}
      `
    });
    return json({ ok: true, redirect: next || "/thanks" });
  } catch (e) {
    return json({ ok: false, error: e?.message || "Server error" }, 500);
  }
};
function normalize(input) {
  return Object.fromEntries(
    Object.entries(input).map(([key, value]) => [String(key), cleanValue(value)])
  );
}
function prettyLabel(key) {
  return key.replace(/^_/, "").replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
function cleanValue(value) {
  const text = value == null ? "" : String(value);
  if (!text) return "";
  const trimmed = text.trim();
  if (trimmed.length > MAX_FIELD_LENGTH) {
    return trimmed.slice(0, MAX_FIELD_LENGTH);
  }
  return trimmed;
}
function allowRequest(ip) {
  const now = Date.now();
  const bucket = rateLimitBuckets.get(ip) || [];
  const fresh = bucket.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);
  fresh.push(now);
  rateLimitBuckets.set(ip, fresh);
  return fresh.length <= RATE_LIMIT_MAX;
}
function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" }
  });
}
function esc(s) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
