export async function onRequestPost({ request }: { request: Request }) {
  const data = await request.formData();
  const payload = {
    name: data.get("name"),
    email: data.get("email"),
    message: data.get("message")
  };
  // TODO: wire to Resend or Cloudflare Email Routing
  return new Response(JSON.stringify({ ok: true, received: payload }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
