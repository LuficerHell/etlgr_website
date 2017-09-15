


$(document).ready(function () {
    var win_h = $(window).height(); 
    var head_h = 40;

    $('.menu__gamb').click(function(){
      $(this).toggleClass('open');
      $('.menu__wrap').toggle().toggleClass('open');
      return false;
    });

    $('.phone_block__play').click(function(){
      $(this).closest('.phone_block__img').addClass('open');
      return false;
    });

    $('.rukovodstvo__play').click(function(){
      $(this).closest('.rukovodstvo__img').addClass('open');
      return false;
    });


    $('.cases__slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      appendArrows: '.cases__slider_nav',
      prevArrow: '<div class="simple_slider__arr simple_slider__arr--prev">&nbsp;</div>',
      nextArrow: '<div class="simple_slider__arr simple_slider__arr--next">&nbsp;</div>',
      arrows: true,
      dots: false,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });

    $(document).click(function(event) {
     
      if (!$(event.target).closest(".menu__wrap").length){
        $('.menu__gamb').removeClass('open');
        $('.menu__wrap').fadeOut().removeClass('open');
      }
    });

    $(window).resize(function(){
      content_w = $('.container').width(); 
      $('.menu__gamb').removeClass('open');
      $('.menu__wrap').removeClass('open').fadeOut();
    });

    $(window).scroll(function(){
      if ($(window).scrollTop() > head_h) {
        $('.header').addClass('fix');
        $('.body-wrap').addClass('fix');
      }

      else{
        $('.header').removeClass('fix');
        $('.body-wrap').removeClass('fix');
      }
    });
  }
);