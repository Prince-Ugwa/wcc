$(document).ready(function () {
  // slider
  $("#hero-slider").owlCarousel({
    loop: true,
    autoplay: true,
    // autoplayTimeout: 6000,

    margin: 0,
    nav: true,
    items: 1,
    smartSpeed: 1000,
    navText: ["<<", ">>"],
    dot: false,
    responsive: {
      0: {
        nav: false,
      },
      678: {
        nav: false,
      },
      1000: {},
    },
  });

  //project slider
  $("#project-slider").owlCarousel({
    loop: true,
    nav: true,
    margin: 0,
    dots: false,
    smartSpeed: 1000,
    autoplay: true,
    autoplayHoverPause: true,
    margin: 24,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1140: {
        items: 2,
      },
    },
  });
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    items: 1,
    autoplay: true,
  });
});
