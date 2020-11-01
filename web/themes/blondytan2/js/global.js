/**
 * @file
 */
(function ($) {
  "use strict";

  // blind version *********************
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
  $('#back-top').hide();

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

  // search navigation panel *********************
  $('#nav-search-row').hide();

  $('#search-button').click(function () {
    $('#nav-menu-row').hide();
    $('#nav-search-row').hide().removeClass('hidden');
    $('#nav-search-row').fadeIn('slow');
  });

  $('#search-cancel').click(function () {
    $('#nav-search-row').fadeOut('slow', function () {
      $('#nav-menu-row').show();
    });
  });
})(jQuery);
