const AUTOPLAY_MS = 4800;

function setupSlider(root: HTMLElement) {
  const viewport = root.querySelector<HTMLElement>('[data-hero-viewport]');
  const slides = Array.from(root.querySelectorAll<HTMLElement>('[data-hero-slide]'));
  const dots = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-hero-embla-dot]'));
  if (!viewport || slides.length < 2 || root.dataset.sliderReady === 'true') return;
  root.dataset.sliderReady = 'true';

  let active = 0;
  let timer = 0;
  let visible = true;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const setActive = (index: number) => {
    active = Math.max(0, Math.min(index, slides.length - 1));
    dots.forEach((dot, i) => {
      const selected = i === active;
      dot.dataset.active = String(selected);
      dot.setAttribute('aria-selected', String(selected));
      const progress = dot.querySelector<HTMLElement>('[data-hero-embla-progress]');
      if (!progress) return;
      progress.style.animation = 'none';
      progress.style.width = selected && reduceMotion ? '100%' : '0%';
      if (selected && !reduceMotion) {
        void progress.offsetWidth;
        progress.style.animation = `hero-embla-progress ${AUTOPLAY_MS}ms linear forwards`;
      }
    });
  };

  const show = (index: number) => {
    const next = (index + slides.length) % slides.length;
    viewport.scrollTo({ left: slides[next].offsetLeft, behavior: reduceMotion ? 'auto' : 'smooth' });
    setActive(next);
  };
  const stop = () => window.clearInterval(timer);
  const start = () => {
    stop();
    if (!document.hidden && visible) {
      timer = window.setInterval(() => show(active + 1), AUTOPLAY_MS);
    }
  };

  dots.forEach((dot, index) => dot.addEventListener('click', () => { show(index); start(); }));
  root.querySelector('[data-hero-prev]')?.addEventListener('click', () => { show(active - 1); start(); });
  root.querySelector('[data-hero-next]')?.addEventListener('click', () => { show(active + 1); start(); });
  viewport.addEventListener('scroll', () => {
    const index = Math.round(viewport.scrollLeft / Math.max(1, viewport.clientWidth));
    if (index !== active && index < slides.length) setActive(index);
  }, { passive: true });
  document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());

  const observer = new IntersectionObserver(([entry]) => {
    visible = Boolean(entry?.isIntersecting);
    if (visible) start();
    else stop();
  }, { rootMargin: '80px 0px' });
  observer.observe(root);
  setActive(0);
  start();
}

export function setupHeroSlider(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>('[data-hero-embla]').forEach(setupSlider);
}
