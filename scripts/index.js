const menuOpenButton = document.querySelector('.button__menu');
const menu = document.querySelector('.navbar__panel');
const menuCloseButton = document.querySelector('.button__menu-close');

menuOpenButton.addEventListener('click', () => {
  menu.classList.toggle('navbar__panel_active');
});

menuCloseButton.addEventListener('click', () => {
  menu.classList.toggle('navbar__panel_active');
});
