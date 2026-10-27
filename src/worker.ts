interface Env {
  ASSETS: {
    fetch(request: Request): Promise<Response>;
  };
}

const firstPaintStyles = `
html.fonts-pending body{font-family:var(--font-sans)!important}
#features,#products,#why-us,#setup-guide,#workflow,#blog,#faq,body>footer{content-visibility:auto}
#features{contain-intrinsic-size:auto 1500px}#products{contain-intrinsic-size:auto 850px}
#why-us{contain-intrinsic-size:auto 1200px}#setup-guide{contain-intrinsic-size:auto 600px}
#workflow{contain-intrinsic-size:auto 850px}#blog{contain-intrinsic-size:auto 750px}
#faq{contain-intrinsic-size:auto 900px}body>footer{contain-intrinsic-size:auto 500px}`;

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const forwardedProtocol = request.headers.get('x-forwarded-proto');
    const isHttp = url.protocol === 'http:' || forwardedProtocol === 'http';
    const isWww = url.hostname.toLowerCase() === 'www.getrustcheat.com';

    if (isHttp || isWww) {
      url.protocol = 'https:';
      url.hostname = 'getrustcheat.com';
      url.port = '';
      return Response.redirect(url.toString(), 301);
    }

    const response = await env.ASSETS.fetch(request);
    const contentType = response.headers.get('content-type') ?? '';

    if (!contentType.toLowerCase().startsWith('text/html')) {
      return response;
    }

    const headers = new Headers(response.headers);
    if (!/charset=/i.test(contentType)) {
      headers.set('content-type', 'text/html; charset=utf-8');
    }
    headers.set('cache-control', 'public, max-age=3600, must-revalidate');

    const htmlResponse = new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });

    return new HTMLRewriter()
      .on('head', {
        element(element) {
          element.append(`<style id="first-paint-optimization">${firstPaintStyles}</style>`, { html: true });
        },
      })
      .transform(htmlResponse);
  },
};
