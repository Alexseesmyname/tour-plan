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

  //Обработка форм//
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "The name must be at least 2 letters",
        },
        email: {
          required: "Please enter your email",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Please enter your phone number",
          minlength:
            "Your phone number must be in the format +7(999)\u00a0999-99-99",
        },
      },
    });
  });

  $('[type="tel"]').each(function () {
    $(this).mask("+7(999) 999-99-99");
  });

  $(".modal__input-group").on("DOMNodeInserted", function () {
    $(".modal__dialog").addClass("modal__dialog_error"),
      $(".modal__form").addClass("modal__form_error"),
      $(".modal__input").addClass("modal__input_error"),
      $(".modal__textarea").addClass("modal__textarea_error");
    $("#name-error").addClass("modal-error_name");
    $("#phone-error").addClass("modal-error_phone");
    $("#email-error").addClass("modal-error_email");
  });
  $(".footer-contact__input-group").on("DOMNodeInserted", function () {
    $("#name-error").addClass("footer-error_name");
    $("#phone-error").addClass("footer-error_phone");
  });
  $(".subscribe").on("DOMNodeInserted", function () {
    $("#email-error").addClass("newsletter-error_email");
  });
});
