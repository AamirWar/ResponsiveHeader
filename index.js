const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nike-nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});
