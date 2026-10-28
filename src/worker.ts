interface Env {
  ASSETS: {
    fetch(request: Request): Promise<Response>;
  };
}

const firstPaintStyles = `
html.fonts-pending body{font-family:var(--font-sans)!important}
.deferred-section{min-height:var(--deferred-size,1000px);content-visibility:hidden;contain-intrinsic-size:auto var(--deferred-size,1000px)}
.deferred-section.is-rendered{min-height:0;content-visibility:auto}
.deferred-section:not(.is-rendered)>*{display:none}
.hero-status-marquee [data-sw-badge]::before{width:.3rem;height:.3rem;flex:0 0 auto;border-radius:999px;background:var(--primary-accent);content:''}`;

const deferredSectionsScript = `(()=>{if(!document.getElementById('hero')||document.documentElement.dataset.deferredSectionsReady==='true')return;document.documentElement.dataset.deferredSectionsReady='true';const s=document.querySelectorAll('[data-deferred-section]'),r=e=>e.classList.add('is-rendered');if(!('IntersectionObserver'in window)){s.forEach(r);return}const o=new IntersectionObserver(e=>e.forEach(t=>{if(!t.isIntersecting)return;r(t.target);o.unobserve(t.target)}),{rootMargin:'0px 0px -80% 0px',threshold:.01});s.forEach(e=>o.observe(e))})()`;

const deferredSizes: Record<string, string> = {
  features: '1500px',
  products: '850px',
  'why-us': '1200px',
  'setup-guide': '600px',
  workflow: '850px',
  blog: '750px',
  faq: '900px',
};

function markDeferredSection(element: Element) {
  if (element.getAttribute('data-deferred-section') !== null) return;
  const id = element.getAttribute('id') ?? '';
  const classes = element.getAttribute('class') ?? '';
  const style = element.getAttribute('style') ?? '';
  element.setAttribute('class', `${classes} deferred-section`.trim());
  element.setAttribute('data-deferred-section', '');
  element.setAttribute('style', `${style}${style && !style.trim().endsWith(';') ? ';' : ''}--deferred-size:${deferredSizes[id] ?? '900px'}`);
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const forwardedProtocol = request.headers.get('x-forwarded-proto');
    const isHttp = url.protocol === 'http:' || forwardedProtocol === 'http';
    const isWww = url.hostname.toLowerCase() === 'www.getdayzcheats.net';

    if (isHttp || isWww) {
      url.protocol = 'https:';
      url.hostname = 'getdayzcheats.net';
      url.port = '';
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === '/google48da28acfb8553d6.html') {
      return new Response('google-site-verification: google48da28acfb8553d6.html', {
        status: 200,
        headers: {
          'content-type': 'text/html; charset=utf-8',
          'cache-control': 'public, max-age=3600',
        },
      });
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
      .on('.hero-status-marquee .icon-app', {
        element(element) {
          element.remove();
        },
      })
      .on('#features,#products,#why-us,#setup-guide,#workflow,#blog,#faq', {
        element: markDeferredSection,
      })
      .on('script[type="module"]', {
        text(text) {
          if (text.text.includes('p=12e3')) {
            text.replace(text.text.replace('p=12e3', 'p=30e3'), { html: true });
          }
        },
      })
      .on('body', {
        element(element) {
          element.append(`<script>${deferredSectionsScript}</script>`, { html: true });
        },
      })
      .transform(htmlResponse);
  },
};
