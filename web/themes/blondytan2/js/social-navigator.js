/**
 * @file
 */

(function ($, Drupal) {
  'use strict';

  $('.view-social-navigator-view ul')
    .prev('a')
    .attr('href', '#')
    .on('click', function (e) {
      e.preventDefault();
    });
})(jQuery, Drupal);
