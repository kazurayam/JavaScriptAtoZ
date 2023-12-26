// Quotation from https://medium.com/deno-the-complete-reference/handle-file-uploads-in-deno-ee14bd2b16d9
// - Deno’s native HTTP server receives HTTP request
// - The HTTP request is presented in the Request object
// - The Request object contains a ReadableStream
// - For the forward case, the ReadableStream can be directly forwarded in the fetch API call
// - For the other two cases,
// - A DefaultStreamReader is obtained from ReadableStream
// - The DefaultStreamReader is converted to Deno.Reader using standard 
//   library’s io module’s utility function readerFromStreamReader
// - Once Deno.Reader is available, it can be processed or directed to a file

import { readerFromStreamReader } from "https://deno.land/std/streams/reader_from_stream_reader.ts";
import { serve } from "https://deno.land/std/http/mod.ts";
import Logger from "https://deno.land/x/logger@v1.1.3/logger.ts";

const SAVE_PATH = './uploaded/'

async function reqHandler(req: Request) {
    try {
        const url = new URL(req.url);
        const fileName = url.searchParams.get("filename") || crypto.randomUUID();
        if (!req.body) {
            return new Response(null, { status: 400 });
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
}

serve(reqHandler, { port: 8000 });
