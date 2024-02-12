import { Router } from "./native-router/mod.ts";
import { serve } from "https://deno.land/std/http/mod.ts";

const router = new Router();

router.get("/", async ( _req : Request, _params: Record<string, string>) => {
    const html = await Deno.readTextFile("./index.html");
    return new Response(html, { headers: {"content-type": "text/html; charset=utf-8"}});
});

router.get("/:filename.html", async ( _ : Request, params: Record<string, string>) => {
    const html = await Deno.readTextFile(`${params.filename}.html`);
    return new Response(html, { headers: {"content-type": "text/html; charset=utf-8"}});
});

router.get("/scripts/:filename.js", async ( _ : Request, params: Record<string, string>) => {
    const html = await Deno.readTextFile(`scripts/${params.filename}.js`);
    return new Response(html, { headers: {"content-type": "application/javascript; charset=utf-8"}});
});

router.get("/:filename.json", async (_req: Request, params: Record<string, string>) => {
    const html = await Deno.readTextFile(`${params.filename}.json`);
    return new Response(html, { headers: {"content-type": "application/json; charset=utf-8"}});
});

async function reqHandler(req: Request): Promise<Response> {
    console.log(`\n[serve.ts#reqHandler] Request:  ${req.method} ${req.url}`);
    return await router.route(req);
}
serve(reqHandler, { port: 3000 });
