'use strict';
const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('#mobile-nav');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menu');
  mobileMenu.hidden = true;
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  mobileMenu.hidden = !open;
});
mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if(event.key === 'Escape' && !mobileMenu.hidden) { closeMenu(); menuButton.focus(); }
});
document.addEventListener('click', event => {
  if (!mobileMenu.hidden && !mobileMenu.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
});
const desktop = window.matchMedia('(min-width: 801px)');
desktop.addEventListener('change', event => { if(event.matches) closeMenu(); });
document.querySelector('#year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); }
    });
  }, {threshold: 0.08});
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  document.documentElement.classList.add('motion-ready');
}
