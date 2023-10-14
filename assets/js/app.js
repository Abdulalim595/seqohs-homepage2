
$(document).ready(function () {
  $(".header__bar , .offcanvas-overlay").click(function () {
    $(".offcanvas-area , .offcanvas-overlay").addClass("active");
  });
  $(".menu-close , .offcanvas-overlay").click(function () {
    $(".offcanvas-area , .offcanvas-overlay").removeClass("active");
  });
  
  $(".hero__slider").owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    navText: [
      '<img src="assets/img/angle_left.svg" alt="">',
      '<img src="assets/img/angle_right.svg" alt="">',
    ],
    dot: false,
  });

  $('.dropdown-menu a.dropdown-item').click(function(e) {
    e.stopPropagation();
});

$('.dropdown-toggle').dropdown();

  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});
