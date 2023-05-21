/**
 * @file
 */

(function (Drupal, cookies) {
  "use strict";

  /*Drupal.behaviors.blindVersionBehavior = {
    attach: () => {
      let blind = $.cookie('blindVersion');

      if (blind == 1) {
        SetBlindStyle();
      } else {
        SetMainStyle();
      }

      document.querySelector('#to-blind-version').addEventListener('click', () => {
        SetBlindStyle();
        cookies.set('blindVersion', 1, JSON.stringify({ expires: 7, path: '/'}));

        return false;
      });

      document.querySelector('.to-main-version').addEventListener('click', () => {
        SetMainStyle();
        cookies.set('blindVersion', 0, JSON.stringify({ expires: 7, path: '/'}));

        return false;
      });
    },
  };

  // blind version *********************
  // $('#to-blind-version').on('click', function () {
  //   SetBlindStyle();
  //   $.cookie('blindVersion', 1, { expires: 7, path: '/'});
  //   return false;
  // });

  // $('.to-main-version').on('click', function () {
  //   SetMainStyle();
  //   $.cookie('blindVersion', 0, { expires: 7, path: '/'});
  //   return false;
  // });

  // var blind = $.cookie('blindVersion');
  // if (blind == 1) {
  //   SetBlindStyle();
  // } else {
  //   SetMainStyle();
  // }

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
  } */

  // to the top navigation *********************
  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById('back-top').classList.add('active');
    } else {
      document.getElementById('back-top').classList.remove('active');
    }
  }

  document.getElementById('back-top').onclick = function() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  // search navigation panel *********************
  document.getElementById('search-button').onclick = function() {
    document.getElementById('nav-menu-row').classList.add('hidden');
    document.getElementById('nav-search-row').classList.remove('hidden');
  }

  document.getElementById('search-button-cancel').onclick = function() {
    document.getElementById('nav-search-row').classList.add('hidden');
    document.getElementById('nav-menu-row').classList.remove('hidden');
  }
})(Drupal, window.Cookies);
