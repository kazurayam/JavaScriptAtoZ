// https://medium.com/deno-the-complete-reference/a-beginners-guide-to-http-server-in-deno-7b42bfcbbd0

import { serve } from "https://deno.land/std/http/mod.ts";

async function reqHandler(req: Request, conn: ConnInfo) {
  //console.log(req);
  //console.log(conn);
  if (
    !req.headers.has("Authorization") ||
    req.headers.get("Authorization")?.split(" ")[1] !==
      Deno.env.get("AUTH_TOKEN")
  ) {
    return new Response(null, { status: 401 });
  }
  if (req.method !== 'POST') {
    return new Response(null, { status: 405 });
  }
  const { pathname: path, searchParams: query } = new URL(req.url);
  if (path !== '/users/search') {
    return new Response(null, { status: 404 });
  }
  let userId;
  if (
    req.headers.has('content-type') &&
    req.headers.get('content-type')?.startsWith('application/json') &&
    req.body) {
    userId = (await req.json()).userId;
  }
  if (!userId) {
    userId = query.get('userId');
  }
  if (!userId) {
    return new Response(null, {status: 400 });
  }
  const userObj = JSON.parse(await Deno.readTextFile('./db.json'))[userId];
  if (!userObj) {
    return new Response(null, { status: 204 });
  }
  return new Response(JSON.stringify(userObj), {
    headers: {
      "content-type": "application/JSON; charset=UTF-8",
    },
  });
}

serve(reqHandler, { port: 5001});