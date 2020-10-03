$(document).ready(function () {
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

  $(".newsletter").parallax({
    imageSrc: "./img/3.newsletter/background-img.jpg",
  });

  var menuButton = document.querySelector(".menu-button");

  menuButton.addEventListener("click", function () {
    document
      .querySelector(".navbar-bottom")
      .classList.toggle("navbar-bottom_active");
  });

  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  var body = $("body");
  var modalButton = $('[data-toggle = "modal"]');
  var modalClose = $(".modal__close");

  modalButton.on("click", openModal);
  modalClose.on("click", closeModal);

  function openModal(event) {
    event.preventDefault();
    modalOverlay.addClass("modal__overlay_active");
    modalDialog.addClass("modal__dialog_active");
  }
  function closeModal(event) {
    event.preventDefault();
    modalOverlay.removeClass("modal__overlay_active");
    modalDialog.removeClass("modal__dialog_active");
  }

  $(document).keydown(function (e) {
    if (e.key === "Escape") {
      closeModal(event);
    }
  });
});
