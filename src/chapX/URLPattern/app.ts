// app.ts

import { serve } from "https://deno.land/std/http/mod.ts";
import { CallbackHandler, Router } from './router.ts';

const getIndex = async (req: Request, params: Record<string, string>): Promise<Response> => new Response('get index\n');

const getUser = async (req: Request, params: Record<string, string>): Promise<Response> => new Response(`get user handler, userid:${params.userid}\n`);

const addUser = async (req: Request, params: Record<string, string>): Promise<Response> => new Response('add user handler\n');

const updateUser = async (req: Request, params: Record<string, string>): Promise<Response> => new Response('update user handler\n');

const addImage = async (req: Request, params: Record<string, string>): Promise<Response> => new Response(`add image handler, userid:${params.userid}, imageid:${params.imageid}\n`);

const router = new Router();
router.add('GET', '/', getIndex);
router.add('GET', '/api/users/:userid', getUser);
router.add('POST', '/api/users/:userid', updateUser);
router.add('PUT', '/api/users/', addUser);
router.add('GET', '/api/users/:userid/images/:imageid', addImage);

async function reqHandler(req: Request) {
  return await router.route(req);
}

serve(reqHandler, { port: 3000 });
