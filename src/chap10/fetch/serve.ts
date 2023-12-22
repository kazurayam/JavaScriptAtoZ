import { serve } from "https://deno.land/std/http/mod.ts";

async function reqHandler(req: Request, conn: ConnIfno) {
  console.log(req)
  const reqURL = new URL(req.url);
  if (req.method === 'GET') {
    console.log(`reqURL.pathname=${reqURL.pathname}`);
    if (reqURL.pathname === "/") {
      const index = await Deno.readTextFile("./index.html");
      return new Response(index, { headers: { "content-type": "text/html"} });
    } else if (reqURL.pathname.startsWith("/js")) {
      const js = await Deno.readTextFile(reqURL.pathname.substring(1));
      return new Response(js, { headers: { "content-type": "text/javascript"} });
    } else if (reqURL.pathname.endsWith(".json")) {
      const json = await Deno.readTextFile(reqURL.pathname.substring(1));
      return new Response(json, { headers: { "content-type": "application/json"}});
    } else if (reqURL.pathname.endsWith(".html")) {
      const html = await Deno.readTextFile(reqURL.pathname.substring(1));
      return new Response(html, { headers: { "content-type": "text/html"}});
    } else {
      return new Response("not found", { status: 404 });
    }
  }
}

serve(reqHandler, { port: 5001});