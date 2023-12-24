// deno-native-router at https://deno.land/x/nativerouter@1.0.0

import { Router } from "./native-router/mod.ts";
import { serve } from "https://deno.land/std/http/mod.ts";
import Logger from "https://deno.land/x/logger@v1.1.3/logger.ts";

const logger = new Logger()
const router = new Router();

router.get("/",
    async (r: Request, p: Record<string, string>) => {
  const html = await Deno.readTextFile("./index.html");
  return new Response(html, { headers: {"content-type": "text/html; charset=utf-8"}});
});

router.get("/run-query", async (r: Request, p: Record<string, string>) => {
    const u = new URL(r.url);
    const text = `Hello from ${u.searchParams.get('name')}`
    return new Response(text, {headers:{"Content-Type": "text/plain; charset=utf-8"}});
});

router.post("/run-post", async (r: Request, p: Record<string, string>) => {
    try {
        const formData = await r.formData();
        logger.info("formData:", formData);
        return new Response(`Hello, ${formData.get('name')}`,
            { headers: { "Content-Type": "text/plain; charset=utf-8" } });
    } catch (e) {
        logger.error(e.message);
    }
});

router.get("/js/:jsfile",
        async (r: Request, p: Record<string, string>) => {
    logger.info(`p.jsfile: ${p.jsfile}`);
    try {
        const js = await Deno.readTextFile(`js/${p.jsfile}`);
        return new Response(js, { headers: {"content-type": "text/javascript"}});
    } catch (e) {
        logger.error(e.message);
    }
});

// the doc of URLPattern --- https://developer.mozilla.org/en-US/docs/Web/API/URLPattern/URLPattern
router.get("/:jsonfile.json",
    async (r: Request, p: Record<string, string>) => {
        logger.info(`jsonfile: ${p.jsonfile}`);
        try {
            const json = await Deno.readTextFile(`${p.jsonfile}.json`);
            return new Response(json, { headers: {"content-type": "application/json"}});
        } catch (e) {
            logger.error(e.message);
        }
    });

router.get("/:htmlfile.html",
    async (r: Request, p: Record<string, string>) => {
        logger.info(`htmlfile: ${p.htmlfile}`);
        try {
            const html = await Deno.readTextFile(`${p.htmlfile}.html`);
            return new Response(html, { headers: {"content-type": "text/html; charset=utf-8"}});
        } catch (e) {
            logger.error(e.message);
        }
    });

async function reqHandler(req: Request) {
  return await router.route(req);
}
serve(reqHandler, { port: 3000 });
