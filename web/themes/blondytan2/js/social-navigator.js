/**
 * @file
 */

(function ($, Drupal) {
  'use strict';

  $(".view-social-navigator-view ul").prev("a").contents().unwrap();
})(jQuery, Drupal);
