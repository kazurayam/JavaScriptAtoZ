// deno-native-router at https://deno.land/x/nativerouter@1.0.0

import { Router } from "./native-router/mod.ts";
import { serve } from "https://deno.land/std/http/mod.ts";
import Logger from "https://deno.land/x/logger@v1.1.3/logger.ts";
import { readerFromStreamReader } from "https://deno.land/std/streams/reader_from_stream_reader.ts";

const logger = new Logger()

const router = new Router();

router.get("/",
    async (req: Request, params: Record<string, string>) => {
        // the name "params" is based on the famous JavaScript library
        // [path-to-regexp](https://github.com/pillarjs/path-to-regexp), which works
        // behind the URLPattern class
  const html = await Deno.readTextFile("./index.html");
  return new Response(html, { headers: {"content-type": "text/html; charset=utf-8"}});
});

router.get("/fetch_query", async (req: Request, params: Record<string, string>) => {
    try {
        const u = new URL(req.url);
        const name = u.searchParams.get('name');
        let text = '';
        if (name !== '') {
            text = `こんにちは、${name}さん！`
        }
        return new Response(text, 
            { headers:{"Content-Type": "text/plain; charset=utf-8"}});
    } catch (e) {
        logger.error(e.message);
    }
});

router.post("/fetch_post", async (req: Request, params: Record<string, string>) => {
    try {
        const formData = await req.formData();
        const name = formData.get('name');
        let text = '';
        if (name !== '') {
            text = `こんにちは、${formData.get('name')}さん！`
        }
        return new Response(text, 
            { headers: { "Content-Type": "text/plain; charset=utf-8" } });
    } catch (e) {
        logger.error(e.message);
    }
});

// https://medium.com/deno-the-complete-reference/handle-file-uploads-in-deno-ee14bd2b16d9
router.post("/fetch_upload", async (req: Request, params: Record<string, string>) => {
    logger.info(`/fetch_upload ${req.url}`)
    const SAVE_PATH = './uploaded';
    try {
        const url = new URL(req.url);
        const fileName = url.searchParams.get("filename") || crypto.randomUUID();
        if (!req.body) {
            return new Response(null, { status: 400});
        }
        const reader = req?.body?.getReader();
        const f = await Deno.open(SAVE_PATH + fileName, {
            create: true,
            write: true,
        });
        await Deno.copy(readerFromStreamReader(reader), f);
        await f.close();
        return new Response(`saved ${fileName}`);
    } catch (e) {
        logger.error(e.message);
    }
});

router.get("/js/:jsfile", async (req: Request, params: Record<string, string>) => {
    logger.info(`params.jsfile: ${params.jsfile}`);
    try {
        const js = await Deno.readTextFile(`js/${params.jsfile}`);
        return new Response(js, { headers: {"content-type": "text/javascript"}});
    } catch (e) {
        logger.error(e.message);
    }
});

// the doc of URLPattern --- https://developer.mozilla.org/en-US/docs/Web/API/URLPattern/URLPattern
router.get("/:jsonfile.json",
    async (req: Request, params: Record<string, string>) => {
        logger.info(`jsonfile: ${params.jsonfile}`);
        try {
            const json = await Deno.readTextFile(`${params.jsonfile}.json`);
            return new Response(json, { headers: {"content-type": "application/json"}});
        } catch (e) {
            logger.error(e.message);
        }
    });

router.get("/:htmlfile.html",
    async (r: Request, params: Record<string, string>) => {
        logger.info(`htmlfile: ${params.htmlfile}`);
        try {
            const html = await Deno.readTextFile(`${params.htmlfile}.html`);
            return new Response(html, { headers: {"content-type": "text/html; charset=utf-8"}});
        } catch (e) {
            logger.error(e.message);
        }
    });

async function reqHandler(req: Request) {
    console.log(`\n[serve.ts#reqHandler] Request:  ${req.method} ${req.url}`);
    return await router.route(req);
}
serve(reqHandler, { port: 3000 });
