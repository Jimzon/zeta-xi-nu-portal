
  /* ── BURGER ── */
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobile-menu');

  function closeMenu() {
    burger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  burger.addEventListener('click', () => {
    const isOpen = burger.classList.toggle('open');
    mobileMenu.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  /* ── SCROLL REVEAL ── */
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));

  /* ── NAV SCROLL ── */
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.style.background = window.scrollY > 80
      ? 'rgba(7,7,7,0.97)'
      : 'rgba(7,7,7,0.88)';
  });
