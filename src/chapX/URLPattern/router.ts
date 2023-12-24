// router.ts

type CallbackHandler = (
  request: Request,
  params: Record<string, string>
) => Promise<Response>;

let Router = class {
  #routes: Record<string, Array<any>> = {
    'GET': [],
    'POST': [],
    'PUT': [],
  }

  add(method: string, pathName: string, handler: CallbackHandler) {
    this.#routes[method].push({
      pattern: new URLPattern({ pathname: pathName }),
      handler: handler,
    });
  }

  async route(req: Record): Promise<Response> {
    for (const r of this.#routes[req.method]) {
      if (r.pattern.test(req.url)) {
        const params = r.pattern.exec(req.url).pathname.groups;
        return await r['handler'](req, params);
      }
    }
    return new Response(null, { status:404 });
  }
};

export { Router };