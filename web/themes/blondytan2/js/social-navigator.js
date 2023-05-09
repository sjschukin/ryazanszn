/**
 * @file
 */

(function (Drupal) {
  'use strict';

  document.querySelectorAll(".view-social-navigator-view ul").forEach((el) => {
    let previousElement = el.previousElementSibling;

    if (previousElement && previousElement.matches('a')) {
      previousElement.href = "#";

      previousElement.addEventListener("click", (e) => {
        e.preventDefault();
      });
    }
  });
})(Drupal);
