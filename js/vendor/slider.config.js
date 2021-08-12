$(document).ready(function () {
  $('.customers__slider').slick({
    arrows: true,
    // dots:true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,

    adaptiveHeight: true,
    // ---- Автопроигрывание ----
    // autoplay: true,
    // autoplaySpeed: 3000,
    // pauseOnHover:true,
    // pauseOnFocus:true,
    // pauseOnDotsHover:true,

    // свайп на ПК
    draggable: true,

    // свайп на мобильных устр.
    swipe: true,
    touchThreshold: 10,
    touchMove: true,

    //ожидание анимации слайда
    waitForAnimate: true,

    //выравнивание по центру .slick-center
    // centerMode: true,

    //все слайды по ширине - для фото
    //variableWidth:true,
    //centerMode: true,

    //ряды
    // rows:2,
    // slidesPerRow:2

    // Адаптив
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          rows: 0,
        }
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2,
          touchThreshold: 10,
        }
      },
      {
        breakpoint: 681,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2,
          arrows: false,
          touchThreshold: 10,
        }
      },
      {
        breakpoint: 581,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
          touchThreshold: 10,
        }
      }
    ],
    //вынос классов в другие классы
    // appendArrows: $('.customers__arrow'),
    // appendDots: $('.reviews__dots'),
  });
  $('.description__slider').slick({
    arrows: false,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 20000,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    swipe: true,
    touchTreshhold: 10,
    touchMove: true,
  });
  $('.reviews__slider').slick({
    lazyLoad: 'ondemand',
    // adaptiveHeight: true,
    // variableWidth: true,
    dots: true,
    speed: 700,
    slidesToShow: 3,
    rows: 0,
    // variableHeight: true,
    centerMode: true,
    centerPadding: 0,
    // swipe: true,
    // touchMove: true,
    touchTreshhold: 10,
    appendDots: $('.reviews__dots'),
    responsive: [
      {
        breakpoint: 1261,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 0,
          centerMode: false,
          centerPadding: 0,
          touchTreshhold: 10,
        }
      },
      {
        breakpoint: 891,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 0,
          centerMode: true,
          centerPadding: 0,
          touchTreshhold: 10,
        }
      }, {

        breakpoint: 541,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 0,
          centerMode: true,
          centerPadding: 0,
          touchTreshhold: 10,
        }
      },
    ]
  });
})