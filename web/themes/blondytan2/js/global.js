/**
 * @file
 */
(function ($) {
  "use strict";
  // All the JavaScript for this file.

  // ===================================
  // blind version                     =
  // ===================================
  $('#to-blind-version').on('click', function () {
    SetBlindStyle();
    $.cookie('blindVersion', 1, { expires: 7, path: '/'});
    return false;
  });

  $('.to-main-version').on('click', function () {
    SetMainStyle();
    $.cookie('blindVersion', 0, { expires: 7, path: '/'});
    return false;
  });

  var blind = $.cookie('blindVersion');
  if (blind == 1) {
    SetBlindStyle();
  } else {
    SetMainStyle();
  }

  $('.js-toggle-fontsize').on('click', function () {
    $(this).siblings().removeClass('selected').end().addClass('selected');
    var bodyClass = $(this).attr('data-class');
    $('body').removeClass('fontsize-small fontsize-middle fontsize-big').addClass(bodyClass);
    $.cookie('blind_fontsize', bodyClass, { expires: 7, path: '/'});
  });
  $('.js-toggle-color').on('click', function () {
    $(this).siblings().removeClass('selected').end().addClass('selected');
    var bodyClass = $(this).attr('data-class');
    $('body').removeClass('color-white color-black color-blue').addClass(bodyClass);
    $.cookie('blind_color', bodyClass, { expires: 7, path: '/'});
  });
  $('.js-toggle-img').on('click', function () {
    $(this).siblings().removeClass('selected').end().addClass('selected');
    var bodyClass = $(this).attr('data-class');
    $('body').removeClass('image-off image-on').addClass(bodyClass);
    $.cookie('blind_image', bodyClass, { expires: 7, path: '/'});
  });

  function SetBlindStyle() {
    $('body').addClass('fontsize-small color-white image-on css-blind');
    //$('#page-wrapper').addClass('css-blind');
    //$('#foot_wrap').removeClass('css_main').addClass('css_blind');
  }
  function SetMainStyle() {
    $('body').removeClass('fontsize-small fontsize-middle fontsize-big color-white color-black color-blue css-blind');
    //$('#page-wrapper').removeClass('css-blind');
    //$('#foot_wrap').removeClass('css_blind').addClass('css_main');
  }

  // to top navigation *********************
  $("#back-top").hide();

  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#back-top').fadeIn();
      } else {
        $('#back-top').fadeOut();
      }
    });

    $('#back-top a').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 400);
      return false;
    });
  });
})(jQuery);



/*
$(function () {
  // Blind panel
  $('.js-toggle_fontsize').on('click', function () {
    $(this).siblings().removeClass('selected').end().addClass('selected');
    var bodyClass = $(this).attr('data-class');
    $('body').removeClass('fontsize-small fontsize-middle fontsize-big').addClass(bodyClass);
  });
  $('.js-toggle_color').on('click', function () {
    $(this).siblings().removeClass('selected').end().addClass('selected');
    var bodyClass = $(this).attr('data-class');
    $('body').removeClass('color_white color_black color_blue').addClass(bodyClass);
  });
  $('.js-toggle_img').on('click', function () {
    $(this).siblings().removeClass('selected').end().addClass('selected');
    var bodyClass = $(this).attr('data-class');
    $('body').removeClass('image_off image_on').addClass(bodyClass);
  });
  $('.js-toggle_font').on('click', function () {
    $(this).siblings().removeClass('selected').end().addClass('selected');
    var bodyClass = $(this).attr('data-class');
    $('body').removeClass('sans_serif serif').addClass(bodyClass);
  });
  $('.js-interlinear').on('click', function () {
    $(this).siblings().removeClass('selected').end().addClass('selected');
    var bodyClass = $(this).attr('data-class');
    $('body').removeClass('standart_interlinear middle_interlinear big_interlinear').addClass(bodyClass);
  });
  $('.settings_ico').on('click', function () {
    $('.settings_block').hide();
    $(this).parents('.blind_panel').find('.settings_block').show();
    $('.js-close_sets').on('click', function () {
      $('.settings_block').hide();
    });
  });
  $('.js-default_set').on('click', function () {
    var bodyClass = 'sans_serif fontsize-small standart_interlinear color_white image_on';
    $('body').removeAttr('class').addClass(bodyClass);
    $('.js-toggle_fontsize, .js-toggle_color, .js-toggle_img').removeClass('selected');
    $('[data-class = sans_serif]').addClass('selected');
    $('[data-class = fontsize-small]').addClass('selected');
    $('[data-class = standart_interlinear]').addClass('selected');
    $('[data-class = color_white]').addClass('selected');
    $('[data-class = image_on]').addClass('selected');
  });
  function SetBlindStyle() {
    $('body').addClass('sans_serif fontsize-small standart_interlinear color_white image_on js-blind blind');
    $('#page_wrapper').removeClass('css_main').addClass('css_blind');
    $('#foot_wrap').removeClass('css_main').addClass('css_blind');
  }
  function SetMainStyle() {
    $('body').removeClass('sans_serif fontsize-small standart_interlinear color_white image_on js-blind blind');
    $('#page_wrapper').removeClass('css_blind').addClass('css_main');
    $('#foot_wrap').removeClass('css_blind').addClass('css_main');
  }

  var blindVersion;
  $('#to_blind_version').on('click', function () {
    SetBlindStyle();
    $masonryContainer.masonry();
    $.cookie('blindVersion', 1, {
      expires: 7,
      path: '/'
    });
    return false;
  });
  $('.to_main_version').on('click', function () {
    SetMainStyle();
    $masonryContainer.masonry();
    $.cookie('blindVersion', 0, {
      expires: 7,
      path: '/'
    });
    return false;
  });
  var blind = $.cookie('blindVersion');
  if (blind == 1) {
    SetBlindStyle();
  } else {
    SetMainStyle();
  }
});
*/
