var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});

const menuOpenButton = document.querySelector('.button__menu');
const menu = document.querySelector('.navbar__panel');
const menuCloseButton = document.querySelector('.button__menu-close');

menuOpenButton.addEventListener('click', () => {
  menu.classList.toggle('navbar__panel_active');
});

menuCloseButton.addEventListener('click', () => {
  menu.classList.toggle('navbar__panel_active');
});
