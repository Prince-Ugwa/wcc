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
    items: 2,
    loop: true,
    nav: true,
    dots: true,
    margin: 10,
    smartSpeed: 1000,
    // autoplay: true,
    autoplayTimeout: 5000,
  });
});
