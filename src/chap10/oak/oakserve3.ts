// https://qiita.com/ekzemplaro/items/a25c4201169d87ddc1b7

import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use(async (context) => {
  // ? send is not defined ?
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd()}/examples/static`,
    index: 'index.html'
  });
});

console.log("*** start ***")
console.log(`${Deno.cwd()}/examples/static`)
await app.listen({ port: 8000 })
