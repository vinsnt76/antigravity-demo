export async function POST(req: Request) {
  const data = await req.json();
  console.log("Lead received:", data);

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
