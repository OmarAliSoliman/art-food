$(document).ready(function () {
  "use strict";

  AOS.init();


  if ($(".show-application")) {
    $(" .show-application .owl-carousel").owlCarousel({
      autoplay: true,
      loop: true,
      // margin: 10,
      responsiveClass: true,
      nav: false,
      autoplay: true,
      arrows: true,
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        600: {
          items: 2,
          nav: true,
        },
        1000: {
          items: 4,
          nav: true,
          loop: true,
        },
      },
    });
  }

  if ($(".features")) {
    $(".features .owl-carousel").owlCarousel({
      autoplay: true,
      loop: true,
      // margin: 10,
      responsiveClass: true,
      nav: false,
      autoplay: true,
      arrows: true,
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        600: {
          items: 2,
          nav: true,
        },
        1000: {
          items: 4,
          nav: true,
          loop: false,
        },
      },
    });
  }
});
