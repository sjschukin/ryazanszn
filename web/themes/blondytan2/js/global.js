/**
 * @file
 */

(function (Drupal) {
  "use strict";

  Drupal.behaviors.blindVersionBehavior = {
    attach: () => {
      let blind = getCookie('blindVersion');

      if (blind == 1) {
        setBlindStyle();
      } else {
        setMainStyle();
      }

      document.querySelector('#to-blind-version').addEventListener('click', () => {
        setBlindStyle();
        setCookie('blindVersion', 1);
        return false;
      });

      document.querySelector('.to-main-version').addEventListener('click', () => {
        setMainStyle();
        setCookie('blindVersion', 0);
        return false;
      });

      let toggleFontSizeElements = document.querySelectorAll('.font-toggle > .js-toggle-fontsize');
      let toggleColorElements = document.querySelectorAll('.color-toggle > .js-toggle-color');
      let toggleImageElements = document.querySelectorAll('.image-toggle > .js-toggle-img');

      for (let i = 0; i < toggleFontSizeElements.length; i++) {
        toggleFontSizeElements[i].addEventListener('click', function () {
          for (let j = 0; j < toggleFontSizeElements.length; j++) {
            toggleFontSizeElements[j].classList.remove('selected');
          }

          this.classList.add('selected');

          let bodyClass = this.getAttribute('data-class');
          document.body.classList.remove('fontsize-small', 'fontsize-middle', 'fontsize-big');
          document.body.classList.add(bodyClass);
          setCookie('blindFontSize', bodyClass);
          return false;
        });
      }

      for (let i = 0; i < toggleColorElements.length; i++) {
        toggleColorElements[i].addEventListener('click', function () {
          for (let j = 0; j < toggleColorElements.length; j++) {
            toggleColorElements[j].classList.remove('selected');
          }

          this.classList.add('selected');

          let bodyClass = this.getAttribute('data-class');
          document.body.classList.remove('color-white', 'color-black', 'color-blue');
          document.body.classList.add(bodyClass);
          setCookie('blindColor', bodyClass);
          return false;
        });
      }

      for (let i = 0; i < toggleImageElements.length; i++) {
        toggleImageElements[i].addEventListener('click', function () {
          for (let j = 0; j < toggleImageElements.length; j++) {
            toggleImageElements[j].classList.remove('selected');
          }

          this.classList.add('selected');

          let bodyClass = this.getAttribute('data-class');
          document.body.classList.remove('image-off', 'image-on');
          document.body.classList.add(bodyClass);
          setCookie('blindImage', bodyClass);
          return false;
        });
      }
    },
  };

  /*$('.js-toggle-fontsize').on('click', function () {
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
  });*/

  function setBlindStyle() {
    document.body.classList.add('fontsize-small','color-white','image-on','css-blind');
    //$('#page-wrapper').addClass('css-blind');
    //$('#foot_wrap').removeClass('css_main').addClass('css_blind');
  }

  function setMainStyle() {
    document.body.classList.remove('fontsize-small','fontsize-middle','fontsize-big','color-white','color-black','color-blue','css-blind');
    //$('#page-wrapper').removeClass('css-blind');
    //$('#foot_wrap').removeClass('css_blind').addClass('css_main');
  }

  function setCookie(name, value) {
    let date = new Date;
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000 * 7);
    document.cookie = name + '=' + value + ';path=/;expires=' + date.toUTCString();
  }

  function getCookie(name) {
    name = name + '=';

    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();

      if (cookie.indexOf(name) == 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
  }

  // to the top navigation *********************
  let backTop = document.getElementById('back-top');

  if (backTop) {
    window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backTop.classList.add('active');
      } else {
        backTop.classList.remove('active');
      }
    }

    backTop.onclick = function() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }

  // search navigation panel *********************
  let searchButton = document.getElementById('search-button');

  if (searchButton) {
    searchButton.onclick = function() {
      document.getElementById('nav-menu-row').classList.add('hidden');
      document.getElementById('nav-search-row').classList.remove('hidden');
    }

    document.getElementById('search-button-cancel').onclick = function() {
      document.getElementById('nav-search-row').classList.add('hidden');
      document.getElementById('nav-menu-row').classList.remove('hidden');
    }
  }
})(Drupal, window.Cookies);
