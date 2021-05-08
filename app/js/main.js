$(function () {
    $('.slider__list').slick({
        arrows: false,
        dots: true,
        verticalSwiping: true,
        vertical: true,

        responsive: [
          {
            breakpoint: 768,
            settings: {
              dots: false,
            }
          },
        ]
    });


    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
          $('.header').addClass('header--top');
        } else {
          $('.header').removeClass('header--top');
        }
      });
})