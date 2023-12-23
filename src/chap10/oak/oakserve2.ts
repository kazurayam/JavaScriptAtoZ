//https://qiita.com/ekzemplaro/items/a25c4201169d87ddc1b7

// ---------------------------------------------------------------
//  oak_basic.ts
//
//                  May/20/2020
//
// ---------------------------------------------------------------
// import { Application,Router } from "https://deno.land/x/oak/mod.ts"
import { Application,Router } from "https://deno.land/x/oak@v10.1.0/mod.ts"

const books = new Map<string, any>();
books.set("1", { id: "1", title: "それから", author: "夏目漱石", })
books.set("2", { id: "2", title: "夜明け前", author: "島崎藤村", })
books.set("3", { id: "3", title: "舞姫", author: "森鴎外", })

const router = new Router()
router
  .get("/", (context) => {
    context.response.body = "日本文学"
  })
  .get("/book", (context) => {
    context.response.body = Array.from(books.values())
  })
  .get("/book/:id", (context) => {
    if (context.params && context.params.id && books.has(context.params.id)) {
      context.response.body = books.get(context.params.id)
    }
  })

const app = new Application()
app.use(router.routes())
app.use(router.allowedMethods())

console.log("*** start ***")
await app.listen({ port: 8000 })

// ---------------------------------------------------------------
