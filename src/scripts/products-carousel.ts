export function setupProductsCarousel() {
  document.querySelectorAll<HTMLElement>('[data-products-carousel]').forEach((wrap) => {
    if (wrap.dataset.productsCarouselBound === 'true') return;
    wrap.dataset.productsCarouselBound = 'true';

    const viewport = wrap.querySelector<HTMLElement>('[data-products-viewport]');
    const previous = wrap.querySelector<HTMLButtonElement>('[data-products-prev]');
    const next = wrap.querySelector<HTMLButtonElement>('[data-products-next]');
    if (!viewport || !previous || !next) return;

    const update = () => {
      previous.hidden = viewport.scrollLeft <= 2;
      next.hidden = viewport.scrollLeft + viewport.clientWidth >= viewport.scrollWidth - 2;
      previous.classList.toggle('is-visible', !previous.hidden);
      next.classList.toggle('is-visible', !next.hidden);
    };

    const step = () => {
      const slide = viewport.querySelector<HTMLElement>('[data-slot="carousel-item"]');
      const track = viewport.querySelector<HTMLElement>('[data-slot="carousel-container"]');
      const gap = track ? Number.parseFloat(getComputedStyle(track).columnGap) || 0 : 0;
      return (slide?.getBoundingClientRect().width ?? viewport.clientWidth) + gap;
    };
    previous.addEventListener('click', () => viewport.scrollBy({ left: -step(), behavior: 'smooth' }));
    next.addEventListener('click', () => viewport.scrollBy({ left: step(), behavior: 'smooth' }));
    viewport.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
  });
}
