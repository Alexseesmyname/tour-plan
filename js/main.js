var hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button_next",
    prevEl: ".hotel-slider__button_prev",
  },
  keyboard: {
    enabled: true,
  },
  effect: "fade",
});

var reviewSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button_next",
    prevEl: ".reviews-slider__button_prev",
  },
});

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
      center: [41.013421, 28.978255],
      zoom: 10,
    }),
    myGeoObject = new ymaps.GeoObject(
      {
        geometry: {
          type: "Point",
          coordinates: [41.013421, 28.978255],
        },
      },
      {
        preset: "islands#redIcon",
      }
    );

  myMap.geoObjects.add(myGeoObject);
}
