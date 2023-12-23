// https://qiita.com/ekzemplaro/items/a16a8b63ba7d9d50f8f1

import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  console.log("*** app.use start ***");
  ctx.response.headers.set('Content-Type', 'text/html; charset=utf-8');
  let s = '*** start ***</br>';
  s += 'Hello World</br>';
  s += '<blockquote>';
  s += 'こんにちは<br />';
  s += '</blockquote>';
  s += `*** ${new Date().toString() } ***<br />`;
  s += '*** end ***<br />';
  ctx.response.body = s;
  console.log("*** app.use finished ***");
});

await app.listen({ port: 8000 });