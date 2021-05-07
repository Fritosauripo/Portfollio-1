$(function () {
    $('.slider__list').slick({
        arrows: false,
        dots: true,
        verticalSwiping: true,
        vertical: true,
    });


    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
          $('.header').addClass('header--top');
        } else {
          $('.header').removeClass('header--top');
        }
      });
})