$(document).ready(function () {
  // slider
  $("#hero-slider").owlCarousel({
    loop: true,
    autoplay: true,
    // autoplayTimeout: 6000,
    // autoplayHoverPause: true,
    margin: 0,
    nav: true,
    items: 1,
    smartSpeed: 1000,
    navText: ["<<", ">>"],
    dot: false,
    responsive: {
      0: {},
      600: {},
      1000: {},
    },
  });

  //project slider
  $("#project-slider").owlCarousel({
    loop: true,
    nav: true,
    margin: 24,
    smartSpeed: 1000,
    // autoplay: true,
    responsiveness: {
      0: {},
      768: {},
      1140: {
        items: 2,
      },
    },
  });
});
