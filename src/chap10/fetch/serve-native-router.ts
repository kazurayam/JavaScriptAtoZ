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

router.get("/run-query",
    async (r: Request, p: Record<string, string>) => {
  const text = `Hello from /run-query`
  return new Response(text, {headers:{"Content-Type": "text/plain; charset=utf-8"}});
});

router.post("/run-post",
    async (r: Request, p: Record<string, string>) => {
  const text = `Hello from /run-post`
  return new Response(text, {headers:{"Content-Type": "text/plain; charset=utf-8"}});
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
/*
router.get(
  "/users/:userId",
  async (r: Request, p: Record<string, string>) => {
    return new Response(
      "Hello from /users/:userId handler, params=" +
        Object.entries(p).join(", ") + "\n",
    );
  },
);

router.put(
  "/users",
  async (r: Request, p: Record<string, string>) => {
    return new Response(
      "Hello from PUT /users handler\n",
    );
  },
);

router.put(
  "/users/:userId/attachments",
  async (r: Request, p: Record<string, string>) => {
    return new Response(
      "Hello from PUT /users/:userId/attachments handler, params=" +
        Object.entries(p).join(", ") + "\n",
    );
  },
);

router.get(
  "/users/:userId/attachments/:attachmentId",
  async (r: Request, p: Record<string, string>) => {
    return new Response(
      "Hello from /users/:userId handler; params=" +
        Object.entries(p).join("; ") + "\n",
    );
  },
);

router.post(
  "/users",
  async (r: Request, p: Record<string, string>) => {
    return new Response(
      "Hello from POST /users handler\n" ,
    );
  },
);

router.patch(
  "/users/:userId",
  async (r: Request, p: Record<string, string>) => {
    return new Response(
      "Hello from PATCH /users handler\n",
    );
  },
);
*/

async function reqHandler(req: Request) {
  return await router.route(req);
}
serve(reqHandler, { port: 3000 });
