/*
 * jQuery replaceText - v1.1 - 11/21/2009
 * http://benalman.com/projects/jquery-replacetext-plugin/
 * 
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($){$.fn.replaceText=function(b,a,c){return this.each(function(){var f=this.firstChild,g,e,d=[];if(f){do{if(f.nodeType===3){g=f.nodeValue;e=g.replace(b,a);if(e!==g){if(!c&&/</.test(e)){$(f).before(e);d.push(f)}else{f.nodeValue=e}}}}while(f=f.nextSibling)}d.length&&$(d).remove()})}})(jQuery);
/* replaceText end */

var quiz_switch = false;
$(document).ready(function() {
  if (window.location.href.match(/^http:\/\/(twitter|www\.youtube|www\.facebook).com/) == null) {
    chrome.extension.sendRequest({}, function(response) {});
    $('body *').replaceText(/(\W|^)(the|a|an) /ig, '$1<span class="anthe">$2</span> ');
  }
  chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
      if (request.action == "toggle") {
        $('.anthe').toggleClass(function() {
          if (quiz_switch) {
            sendResponse({quiz_switch: "off"});
            quiz_switch = false;
            return "on";
          } else {
            sendResponse({quiz_switch: "on"});
            quiz_switch = true;
            return "on";
          }
        });
      }
    });
});
