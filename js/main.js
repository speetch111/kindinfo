
function app__mobile() {
  if ($(window).width() < 1024) {
    $('.header__navigation-wrap').append($('.rightside__navigation-wrap'));
    $('.header__navigation-wrap').prepend($('.rightside__navigation-cabinet'));
  } else {
    $('.rightside__navigation-wrap').insertAfter($('.rightside__advertising'));
    $('.rightside__navigation-cabinet').insertBefore($('.rightside__advertising'));
  }


   let header_height = $('.header__wrapper').innerHeight();

    $('.header').css({
    'height': header_height,
  });

}

$(window).resize(app__mobile);


$(function () {
  $(".rate-yo").rateYo({
    spacing: "7px",
    ratedFill: "#FFC200",
    normalFill: "#F0F0F0",
    starWidth: "19px",
    numStars: 10,
    rating    : 1,
    starSvg: '<svg height="511pt" viewBox="0 -10 511.98685 511" width="511pt" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0"/>' +
   '<svg>'
  });
});

$(function () {
  app__mobile();



  $('a.anchor').click(function () {
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).legth != 0) {
      $('html, body').animate({
        scrollTop: $(scroll_el).offset().top - 30
      }, 500);
      
    }
    return false;
  });

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

  $('.tabs__content > div').hide();

  $('.tabs__links a').click(function () {
    if ($(this).parent().hasClass('active')) return;
    $(this).parent().addClass('active').siblings().removeClass('active');
    target = $(this).attr('href');
    $(target).show().siblings().hide();

    return false;
  });

  $('.tabs__links li:first-child a').click();

});



