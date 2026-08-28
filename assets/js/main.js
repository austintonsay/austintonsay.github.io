(() => {
  const root = document.documentElement;
  const header = document.querySelector('[data-header]');
  const parallax = document.querySelector('[data-parallax]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let ticking = false;

  const update = () => {
    const y = window.scrollY;
    if (header) header.classList.toggle('is-scrolled', y > 24);

    if (parallax && !reduceMotion.matches) {
      const rect = parallax.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(1, rect.height - innerHeight)));
      const travel = -70 + progress * 140;
      root.style.setProperty('--parallax-y', `${travel}px`);
    }
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
  update();

  const menuButton = document.querySelector('[data-menu-button]');
  const mobileNav = document.querySelector('[data-mobile-nav]');
  if (menuButton && mobileNav) {
    const closeMenu = () => {
      mobileNav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    };
    menuButton.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
    mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  }

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion.matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px' });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
  }
})();

