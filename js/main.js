$(document).ready(function(){new Swiper(".hotel-slider",{loop:!0,navigation:{nextEl:".hotel-slider__button_next",prevEl:".hotel-slider__button_prev"},keyboard:{enabled:!0},effect:"fade"}),new Swiper(".reviews-slider",{loop:!0,navigation:{nextEl:".reviews-slider__button_next",prevEl:".reviews-slider__button_prev"}}),$(".newsletter").parallax({imageSrc:"./img/3.newsletter/background-img.jpg"}),document.querySelector(".menu-button").addEventListener("click",function(){document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom_active")});var e=$(".modal__overlay"),o=$(".modal__dialog"),a=$('[data-toggle = "modal"]'),r=$(".modal__close");function t(a){a.preventDefault(),e.removeClass("modal__overlay_active"),o.removeClass("modal__dialog_active")}a.on("click",function(a){a.preventDefault(),e.addClass("modal__overlay_active"),o.addClass("modal__dialog_active")}),r.on("click",t),$(document).keydown(function(e){"Escape"===e.key&&t(event)}),$(".form").each(function(){$(this).validate({errorClass:"invalid",messages:{name:{required:"Please specify your name",minlength:"The name must be at least 2 letters"},email:{required:"Please enter your email",email:"Email must be in format of name@domain.com"},phone:{required:"Please enter your phone number",minlength:"Correct format is +7(999) 999-99-99"}}})}),$('[type="tel"]').each(function(){$(this).mask("+7(999) 999-99-99")}),$(".modal__input-group").on("DOMNodeInserted",function(){$(".modal__dialog").addClass("modal__dialog_error"),$(".modal__form").addClass("modal__form_error"),$(".modal__input").addClass("modal__input_error"),$(".modal__textarea").addClass("modal__textarea_error"),$("#name-error").addClass("modal-error_name"),$("#phone-error").addClass("modal-error_phone"),$("#email-error").addClass("modal-error_email")}),$(".footer-contact__input-group").on("DOMNodeInserted",function(){$("#name-error").addClass("footer-error_name"),$("#phone-error").addClass("footer-error_phone")}),$(".subscribe").on("DOMNodeInserted",function(){$("#email-error").addClass("newsletter-error_email")}),AOS.init()});