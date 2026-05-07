/* ─────────────────────────────
   BURGER MENU
───────────────────────────── */

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

  document.body.style.overflow = isOpen
    ? 'hidden'
    : '';

});

/* ─────────────────────────────
   HERO PARALLAX
───────────────────────────── */

window.addEventListener('scroll', () => {

  const heroBg = document.querySelector('.hero-bg');

  if (!heroBg) return;

  const y = window.scrollY * 0.18;

  heroBg.style.transform =
    `scale(1.06) translateY(${y}px)`;

});

/* ─────────────────────────────
   SCROLL REVEAL
───────────────────────────── */

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add('visible');

      observer.unobserve(entry.target);

    }

  });

}, {
  threshold: 0.12
});

reveals.forEach(el => observer.observe(el));

/* ─────────────────────────────
   MESSAGE CARDS MOBILE GLOW
───────────────────────────── */

const messageCards = document.querySelectorAll('.message-card');

const cardObserver = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add('visible');

    }

  });

}, {
  threshold: 0.25
});

messageCards.forEach(card => {
  cardObserver.observe(card);
});

/* ─────────────────────────────
   NAVBAR SCROLL EFFECT
───────────────────────────── */

window.addEventListener('scroll', () => {

  const nav = document.querySelector('nav');

  if (!nav) return;

  nav.style.background =
    window.scrollY > 80
      ? 'rgba(7,7,7,0.97)'
      : 'rgba(7,7,7,0.88)';

});

/* ─────────────────────────────
   SMOOTH CLOSE MOBILE MENU
───────────────────────────── */

const mobileLinks = document.querySelectorAll('#mobile-menu a');

mobileLinks.forEach(link => {

  link.addEventListener('click', () => {

    closeMenu();

  });

});