import { serve } from "https://deno.land/std/http/mod.ts";

async function reqHandler(req: Request, conn: ConnIfno) {
  console.log(req)
  const reqURL = new URL(req.url);
  if (req.method === 'GET' && reqURL.pathname === "/") {
    const html = await Deno.readTextFile("./index.html");
    return new Response(html, {
      headers: {
        "content-type": "text/html"
      },
    });
  } else {
    return new Response("not found", { status: 404 });
  }
}

serve(reqHandler, { port: 5001});