$(document).ready(function () {
  // slider
  $("#hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    smartSpeed: 1000,
    navText: ["<<", ">>"],
    dot: true,
    responsive: {
      0: {},
      600: {},
      1000: {},
    },
  });
});
