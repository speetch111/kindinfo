
function app__mobile() {
  if ($(window).width() < 1024) {
    $('.header__navigation-wrap').append($('.rightside__navigation-wrap'));
  } else {
    $('.rightside__navigation-wrap').insertAfter($('.rightside__advertising'));
  }


   let header_height = $('.header__wrapper').innerHeight();

    $('.header').css({
    'height': header_height,
  });

}

$(window).resize(app__mobile);

$(function () {
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

  $('.products__tag-list li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });

  $(window).on('scroll', function (e) {
    var positionScroll = $(window).scrollTop();



    if (positionScroll > 500)
      $('.scroll-top').fadeIn();
    else
      $('.scroll-top').fadeOut();

  });

  function fadeout_popup() {
      $(".popup").fadeOut(600);
      $('body').removeClass('oh');
      return false;
    }
  
    function show_popup(block) {
      $('body').addClass('oh');
      $("." + block).show();
    }
  
    $(document).on('click', function(){
      var target = $( event.target );
  
      if (target.hasClass('popup__inner') ||
         target.hasClass('popup__close'))  {
        fadeout_popup()
      }
    });

    $(document).on('click', '.open-popup', function () {
      $(".popup").hide();
  
      show_popup($(this).data('popup'));
      return false;
    });


  
  $('.mobile__hamburger').click(function () {
    $('.header__navigation-wrap').addClass('opened');
    $('body').addClass('oh');
  });

  $('.close-hamburger').click(function () {
    $('.header__navigation-wrap').removeClass('opened');
    $('body').removeClass('oh');
  });

  $('.mobile__filter-open').click(function () {
    $('.rightside__mobile-offcanvas').addClass('opened');
    $('body').addClass('oh');
  });

  $('.close-filter').click(function () {
    $('.rightside__mobile-offcanvas').removeClass('opened');
    $('body').removeClass('oh');
  });

  $('.mobile__category-open').click(function () {
    $('.products__tags-offcanvas').addClass('opened');
    $('body').addClass('oh');
  });

  $('.close-category').click(function () {
    $('.products__tags-offcanvas').removeClass('opened');
    $('body').removeClass('oh');
  });


  if ($(window).width() > 1200) {

    $(window).scroll(function () {
      var height = $(window).scrollTop();


      if (height > 500) {
        $('.header').addClass('scroll');
        $('.header__wrapper').addClass('scroll');
      } else {
        $('.header').removeClass('scroll');
        $('.header__wrapper').removeClass('scroll');
      }
      
      if (height > 570) {
        $('.header__wrapper').addClass('scroll');
      } else {
        $('.header__wrapper').removeClass('scroll');
      }


    });
  }

});



