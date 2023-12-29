import { Router } from "./native-router/mod.ts";
import { serve } from "https://deno.land/std/http/mod.ts";

const router = new Router();

router.get("/", async (req: Request, params: Record<string, string>) => {
    return new Response("Hello, world!", 
                        { headers: {"content-type": "text/plain; charset=utf-8"}});
});

router.post("/", async (req: Request, params: Record<string, string>) => {
    let text = 'Hello';
    const formData = await req.formData();
    const name = formData.get('name');
    if (name !== null) {
        text = `Hello, ${formData.get('name')}`;
    }
    return new Response(text);
});


async function reqHandler(req: Request) {
    console.log(`\n[serve.ts#reqHandler] Request:  ${req.method} ${req.url}`);
    return await router.route(req);
}
serve(reqHandler, { port: 8080 });

