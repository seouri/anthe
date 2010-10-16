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

$(document).ready(function() {
  chrome.extension.sendRequest({}, function(response) {});
  $('body *').replaceText(/([\s^])(the|a|an) /ig, '$1<span style="display: inline-block; width: 2em; margin:0; padding: 0; border: 2px solid #ccc; background-color: #fff; color: #fff; text-align: center">$2</span> ');
});