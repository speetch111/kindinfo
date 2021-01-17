let header_height = $('.header__wrapper').innerHeight();

function css_styles() {

  $('.header').css({
    'height': header_height,
  });

}

function app__mobile() {
  if ($(window).width() < 1024) {
    $('.header__navigation-wrap').append($('.rightside__navigation-wrap'));
  } else {
    $('.rightside__navigation-wrap').insertAfter($('.rightside__advertising'));
  }


  if ($(window).width() < 700) {
    $('.header__navigation-wrap').append($('.header__user-no-login'));
  } else {
    $('.header__user-no-login').insertAfter($('.header__user-login'));
  }

}


$(window).resize(css_styles, app__mobile);

$(function () {
  css_styles();
  app__mobile();


  $('.scroll-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 300);

    return false;
  });

  $('.product__item-wishlist').click(function () {
    $(this).toggleClass('active');
  });

  $(window).on('scroll', function (e) {
    var positionScroll = $(window).scrollTop();



    if (positionScroll > 300)
      $('.scroll-top').fadeIn();
    else
      $('.scroll-top').fadeOut();

  });

});



$(function () {

})