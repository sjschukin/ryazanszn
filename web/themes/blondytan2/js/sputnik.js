/**
 * @file
 */
(function ($) {
  "use strict";
  // All the JavaScript for this file.

  // ===================================
  // sputnik counter                   =
  // ===================================
  (function(d, t, p) {
    var j = d.createElement(t);
    j.async = true;
    j.type = "text/javascript";
    j.src = ("https:" == p ? "https:" : "http:") + "//stat.sputnik.ru/cnt.js";
    var s = d.getElementsByTagName(t)[0]; s.parentNode.insertBefore(j, s);
  })(document, "script", document.location.protocol);
})(jQuery);
