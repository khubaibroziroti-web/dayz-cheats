const AUTOPLAY_MS = 4200;
const INITIAL_AUTOPLAY_MS = 12000;

function setupSlider(root: HTMLElement) {
  const viewport = root.querySelector<HTMLElement>('[data-hero-viewport]');
  const track = root.querySelector<HTMLElement>('[data-hero-track]');
  const slides = Array.from(root.querySelectorAll<HTMLElement>('[data-hero-slide]'));
  const dots = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-hero-embla-dot]'));
  if (!viewport || !track || slides.length < 2 || root.dataset.sliderReady === 'true') return;
  root.dataset.sliderReady = 'true';

  let active = 0;
  let timer = 0;
  let visible = true;
  let hasAdvanced = false;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const loadSlide = (index: number) => {
    const slide = slides[index];
    if (!slide) return Promise.resolve();
    const image = slide.querySelector<HTMLImageElement>('img[data-src]');
    if (!image) return image?.decode?.().catch(() => undefined) ?? Promise.resolve();
    const picture = image.closest('picture');
    picture?.querySelectorAll<HTMLElement>('[data-srcset]').forEach((element) => {
      element.setAttribute('srcset', element.dataset.srcset ?? '');
      element.removeAttribute('data-srcset');
    });
    image.src = image.dataset.src ?? image.src;
    image.removeAttribute('data-src');
    return image.decode?.().catch(() => undefined) ?? Promise.resolve();
  };

  const setActive = (index: number) => {
    active = Math.max(0, Math.min(index, slides.length - 1));
    dots.forEach((dot, i) => {
      const selected = i === active;
      dot.dataset.active = String(selected);
      dot.setAttribute('aria-selected', String(selected));
      const progress = dot.querySelector<HTMLElement>('[data-hero-embla-progress]');
      if (!progress) return;
      progress.getAnimations().forEach((animation) => animation.cancel());
      progress.style.transform = selected && reduceMotion ? 'scaleX(1)' : 'scaleX(0)';
      if (selected && !reduceMotion) {
        progress.animate(
          [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }],
          { duration: AUTOPLAY_MS, easing: 'linear', fill: 'forwards' },
        );
      }
    });
  };

  const show = async (index: number) => {
    const next = (index + slides.length) % slides.length;
    await loadSlide(next);
    track.style.transform = `translate3d(-${next * 100}%, 0, 0)`;
    setActive(next);
  };
  const stop = () => window.clearInterval(timer);
  const start = () => {
    stop();
    if (!document.hidden && visible) {
      const delay = hasAdvanced ? AUTOPLAY_MS : INITIAL_AUTOPLAY_MS;
      timer = window.setTimeout(() => {
        hasAdvanced = true;
        void show(active + 1).finally(start);
      }, delay);
    }
  };

  dots.forEach((dot, index) => dot.addEventListener('click', () => { void show(index); start(); }));
  root.querySelector('[data-hero-prev]')?.addEventListener('click', () => { void show(active - 1); start(); });
  root.querySelector('[data-hero-next]')?.addEventListener('click', () => { void show(active + 1); start(); });
  document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());

  const observer = new IntersectionObserver(([entry]) => {
    visible = Boolean(entry?.isIntersecting);
    if (visible) start();
    else stop();
  }, { rootMargin: '80px 0px' });
  observer.observe(root);
  setActive(0);
  start();

  const preloadNextSlide = () => {
    void loadSlide((active + 1) % slides.length);
    if (!hasAdvanced) {
      hasAdvanced = true;
      start();
    }
  };
  root.addEventListener('pointerenter', preloadNextSlide, { once: true, passive: true });
  root.addEventListener('focusin', preloadNextSlide, { once: true });
}

export function setupHeroSlider(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>('[data-hero-embla]').forEach(setupSlider);
}
