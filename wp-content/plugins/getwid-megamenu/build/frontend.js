!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=16)}({16:function(e,t){var n;(n=jQuery)(document).ready((function(){var e=n(".gw-mm"),t=n(".gw-pm");function o(e){e.each((function(e,t){if(n(t).hasClass("is-mobile"))n(t).find(".gw-mm-item__dropdown-wrapper").css({left:"",width:"","max-width":""});else{var o=n(t).find(".gw-mm-item__dropdown-wrapper"),i=n(t).offset(),r=n(t).data("dropdown-width"),d=n(t).hasClass("has-full-width-dropdown")?n(window).width():n(t).width(),s=n(t).hasClass("has-full-width-dropdown")?-i.left:0;r&&r<d&&(s+=(d-r)/2),o.each((function(e,t){n(t).css({left:s,width:d,"max-width":r})}))}}))}function i(e){e.each((function(e,t){if(n(t).hasClass("is-collapsible")){var o=n(t).data("responsive-breakpoint"),i=n(t).find(".gw-mm__toggle-wrapper");n(t).find(".gw-mm__toggle"),o>=n(window).width()?(i.removeClass("is-hidden"),n(t).addClass("is-mobile")):(i.addClass("is-hidden"),n(t).removeClass("is-mobile is-opened"))}}))}function r(e,t){e.toggleClass("is-opened"),t.toggleClass("is-opened")}function d(e){e.each((function(e,t){var o=n(t).find(".gw-mm__content-wrapper");if(!n(t).hasClass("is-mobile"))return n(o).css({left:"",width:""}),!1;var i=-n(t).offset().left;n(o).css({left:i,width:n(window).width()})}))}function s(e){e.each((function(e,t){var o=n(t).find(".gw-pm-item__dropdown"),i=n(t).closest(".gw-mm").length;o.each((function(e,o){n(o).removeClass("toleft");var r=!1;n(o).offset().left+n(o).width()>=(i?n(t).closest(".gw-mm-item__dropdown-wrapper").offset().left+n(t).closest(".gw-mm-item__dropdown-wrapper").width():n(window).width())&&(r=!0),r&&n(o).addClass("toleft")}))}))}i(e),function(e){e.each((function(e,t){n(t).on("click",".gw-mm__toggle",(function(e){r(n(this),n(t))})),n(t).on("click",".gw-mm-item__toggle",(function(e){var t=n(this).closest(".gw-mm-item").find(".gw-mm-item__dropdown-wrapper");r(n(this),n(t))}))}))}(e),o(e),function(e){e.each((function(e,t){var o=n(t).data("dropdown-content-width");o&&n(t).find(".gw-mm-item__dropdown-content").css({"max-width":o})}))}(e),d(e),s(t),n(window).resize((function(){i(e),o(e),d(e),s(t)}))}))}});