// https://medium.com/deno-the-complete-reference/native-router-in-deno-16595970daae
import { Router } from "./native-router/mod.ts";

import { serve } from "https://deno.land/std/http/mod.ts";

const router = new Router();

router.get("/hello", async (req: Request, params: Record<string, string>) => {
    let text = 'Hello';
    const u = new URL(req.url);
    const name = u.searchParams.get('name');
    if (name !== null) {
        text = `Hello, ${name}!`
    }
    return new Response(text, 
                        { headers:{"Content-Type": "text/plain; charset=utf-8"}});
});

router.post("/hello", async (req: Request, params: Record<string, string>) => {
    let text = 'Hello';
    const formData = await req.formData();
    const name = formData.get('name');
    if (name !== '') {
        text = `Hello, ${formData.get('name')}`;
    }
    return new Response(text, 
                        { headers: {"Content-Type": "text/plain; charset=utf-8"}});
});

router.get("/hello/:name", async (req: Request, params: Record<string, string>) => {
    return new Response(`Hello, ${params.name}!`, 
                        { headers: {"content-type": "text/plain; charset=utf-8"}});
});

router.get("/", async (req: Request, params: Record<string, string>) => {
    const html = await Deno.readTextFile("./index.html");
    return new Response(html, { headers: {"content-type": "text/html; charset=utf-8"}});
});

router.get("/:filename.html", async (req: Request, params: Record<string, string>) => {
    const html = await Deno.readTextFile(`${params.filename}.html`);
    return new Response(html, { headers: {"content-type": "text/html; charset=utf-8"}});
});

router.get("/scripts/:filename.js", async (req: Request, params: Record<string, string>) => {
    const html = await Deno.readTextFile(`scripts/${params.filename}.js`);
    return new Response(html, { headers: {"content-type": "application/javascript; charset=utf-8"}});
});

async function reqHandler(req: Request) {
    console.log(`\n[serve.ts#reqHandler] Request:  ${req.method} ${req.url}`);
    return await router.route(req);
}
serve(reqHandler, { port: 3000 });

