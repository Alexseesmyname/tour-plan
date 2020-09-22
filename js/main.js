var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button__next",
    prevEl: ".slider-button__prev",
  },
  keyboard: {
    enabled: true,
  },
  effect: "fade",
});

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [41.013421, 28.978255],
    zoom: 10,
  });
}
