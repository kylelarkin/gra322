$('.menu-button').click(function(){
  $('nav').toggleClass('open');
});

// Initialize Animate on Scroll
AOS.init();

// Initialize Jarallax
$('.jarallax').jarallax({
  speed: .2,
});

// Initialize Rellax
var rellax = new Rellax('.rellax', {
  speed: -2,
  center: false,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false
});

// Initialize Tiny Slider
var slider = tns({
  container: '.my-slider',
  items: 4,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  mouseDrag: true
});