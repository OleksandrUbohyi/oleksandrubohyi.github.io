$('.aside-open').on('click', function() {
  $('.header__nav-wrapper').addClass('active');
  $('body').addClass('no-scroll');
  $('.overlay').fadeIn();
});

function closeAside() {
 $('.header__nav-wrapper').removeClass('active');
 $('body').removeClass('no-scroll');
 $('.overlay').fadeOut();
}

$('.aside-close').on('click', closeAside);

$('.wholesale-price').on('click', function() {
  $('.overlay').fadeIn();
  $('.modal-wholesale').fadeIn();
});

function closeModal() {
  $('.overlay').fadeOut();
  $('.modal-wholesale').fadeOut();
}

$('.modal__close').on('click', closeModal);
$('.overlay').on('click', closeModal);


var mySwiper = new Swiper ('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 50,
  grabCursor: true,
  breakpointsInverse: true,
  breakpoints: {
// when window width is >= 320px
    320: {
      slidesPerView: 1,
      centeredSlides: true,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 30,
      centeredSlides: false,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
    1200: {
      slidesPerView: 4,
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})