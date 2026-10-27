interface Env {
  ASSETS: {
    fetch(request: Request): Promise<Response>;
  };
}

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
    headers.set('cache-control', 'public, max-age=3600, must-revalidate, no-transform');

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
