
const hamburger = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-open');

  document.body.style.overflow =
    mobileMenu.classList.contains('is-open') ? 'hidden' : '';
});
