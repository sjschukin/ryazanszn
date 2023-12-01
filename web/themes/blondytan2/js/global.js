/**
 * @file
 */

let toggleFontSizeElements = document.querySelectorAll('.font-toggle > .js-toggle-fontsize');
let fontSizeClasses = ['fontsize-small', 'fontsize-middle', 'fontsize-big'];
let toggleColorElements = document.querySelectorAll('.color-toggle > .js-toggle-color');
let colorClasses = ['color-white', 'color-black', 'color-blue'];
let toggleImageElements = document.querySelectorAll('.image-toggle > .js-toggle-img');
let imageClasses = ['image-off', 'image-on'];

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

      for (let i = 0; i < toggleFontSizeElements.length; i++) {
        toggleFontSizeElements[i].addEventListener('click', function () {
          setBlindMode(toggleFontSizeElements, fontSizeClasses, i);
          setCookie('blindFontSize', i);
          return false;
        });
      }

      for (let i = 0; i < toggleColorElements.length; i++) {
        toggleColorElements[i].addEventListener('click', function () {
          setBlindMode(toggleColorElements, colorClasses, i);
          setCookie('blindColor', i);
          return false;
        });
      }

      for (let i = 0; i < toggleImageElements.length; i++) {
        toggleImageElements[i].addEventListener('click', function () {
          setBlindMode(toggleImageElements, imageClasses, i);
          setCookie('blindImage', i);
          return false;
        });
      }
    },
  };

  function setBlindStyle() {
    let fontSizeIndex = getCookie('blindFontSize');
    let colorIndex = getCookie('blindColor');
    let imageIndex = getCookie('blindImage');

    setBlindMode(toggleFontSizeElements, fontSizeClasses, fontSizeIndex);
    setBlindMode(toggleColorElements, colorClasses, colorIndex);
    setBlindMode(toggleImageElements, imageClasses, imageIndex);

    document.body.classList.add('css-blind');
  }

  function setMainStyle() {
    document.body.classList.remove('fontsize-small', 'fontsize-middle', 'fontsize-big', 'color-white', 'color-black', 'color-blue', 'css-blind');
  }

  function setBlindMode(elements, classes, index) {
    if (index === undefined) {
      index = 0;
    }

    for (let i = 0; i < elements.length; i++) {
      if (i == index) {
        elements[i].classList.add('selected');
      }
      else {
        elements[i].classList.remove('selected');
      }
    }

    document.body.classList.remove(...classes);
    document.body.classList.add(classes[index]);
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
