// Main slider
$(document).ready(function () {
  $('.main__slider').slick({
    dots: false,

    prevArrow: '<a class="slider-btn-back"><i class="fas fa-angle-left"></i></a>',
    nextArrow: '<a class="slider-btn-forward"><i class="fas fa-angle-right"></i></a>',
    responsive: [{
      breakpoint: 640,
      settings: {
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
      }
    }]
  });
});

// Secondary slider
$(document).ready(function () {
  $('.slider__products').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    prevArrow: '<a class="slider-btn-back-secondary"><i class="fas fa-angle-left"></i></a>',
    nextArrow: '<a class="slider-btn-forward-secondary"><i class="fas fa-angle-right"></i></a>',
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 1500,
        }
      }
    ]

  });
});