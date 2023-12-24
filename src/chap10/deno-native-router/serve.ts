// deno-native-router at https://deno.land/x/nativerouter@1.0.0

import { Router } from "./native-router/mod.ts";
import { serve } from "https://deno.land/std/http/mod.ts";


const router = new Router();

router.get("/", async (r: Request, p: Record<string, string>) => {
  return new Response("Hello from / handler\n");
});

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
      "Hello from /users/:userId handler, params=" +
        Object.entries(p).join(", ") + "\n",
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
      "Hello from POST /users handler\n",
    );
  },
);

//listenAndServe(":3000", async (r) => await router.route(r));

async function reqHandler(req: Request) {
  return await router.route(req);
}

serve(reqHandler, { port: 3000 });
