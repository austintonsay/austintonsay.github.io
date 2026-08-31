(() => {
  const root = document.documentElement;
  const header = document.querySelector('[data-header]');
  const parallax = document.querySelector('[data-parallax]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const PARALLAX_START = -36;
  const PARALLAX_TRAVEL = 72;
  const BRAKE_START = 0.62;
  const BRAKE_POSITION = 0.70;
  const FOLLOW_RATE = 0.075;
  let targetParallax = PARALLAX_START;
  let currentParallax = PARALLAX_START;
  let parallaxFrame = null;

  // Move steadily at first, then enter a cubic braking phase whose velocity
  // reaches exactly zero at the end of the image-backed section.
  const brakingProgress = (progress) => {
    if (progress <= BRAKE_START) {
      return progress * (BRAKE_POSITION / BRAKE_START);
    }

    const brakeLength = 1 - BRAKE_START;
    const t = (progress - BRAKE_START) / brakeLength;
    const t2 = t * t;
    const t3 = t2 * t;
    const entrySlope = BRAKE_POSITION / BRAKE_START;
    const entryTangent = entrySlope * brakeLength;

    // Cubic Hermite interpolation: continuous position and velocity at the
    // brake point, with a zero exit tangent for a natural stop.
    const h00 = 2 * t3 - 3 * t2 + 1;
    const h10 = t3 - 2 * t2 + t;
    const h01 = -2 * t3 + 3 * t2;
    return h00 * BRAKE_POSITION + h10 * entryTangent + h01;
  };

  const renderParallax = () => {
    currentParallax += (targetParallax - currentParallax) * FOLLOW_RATE;
    root.style.setProperty('--parallax-y', `${currentParallax.toFixed(2)}px`);

    if (Math.abs(targetParallax - currentParallax) > 0.05) {
      parallaxFrame = requestAnimationFrame(renderParallax);
    } else {
      currentParallax = targetParallax;
      root.style.setProperty('--parallax-y', `${currentParallax.toFixed(2)}px`);
      parallaxFrame = null;
    }
  };

  const updateTarget = () => {
    const y = window.scrollY;
    if (header) header.classList.toggle('is-scrolled', y > 24);

    if (parallax && !reduceMotion.matches) {
      const rect = parallax.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(1, rect.height - innerHeight)));
      targetParallax = PARALLAX_START + brakingProgress(progress) * PARALLAX_TRAVEL;
      if (parallaxFrame === null) parallaxFrame = requestAnimationFrame(renderParallax);
    }
  };

  window.addEventListener('scroll', updateTarget, { passive: true });
  window.addEventListener('resize', updateTarget);
  updateTarget();

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
