!function(e){var t={init:function(t){var i={onShow:null};return t=e.extend(i,t),this.each(function(){var i=e(this);e(window).width();i.width("100%");var a,n,o=i.find("li.tab a"),r=i.width(),s=Math.max(r,i[0].scrollWidth)/o.length,l=0;a=e(o.filter('[href="'+location.hash+'"]')),0===a.length&&(a=e(this).find("li.tab a.active").first()),0===a.length&&(a=e(this).find("li.tab a").first()),a.addClass("active"),l=o.index(a),l<0&&(l=0),void 0!==a[0]&&(n=e(a[0].hash)),i.append('<div class="indicator"></div>');var u=i.find(".indicator");i.is(":visible")&&(u.css({right:r-(l+1)*s}),u.css({left:l*s})),e(window).resize(function(){r=i.width(),s=Math.max(r,i[0].scrollWidth)/o.length,l<0&&(l=0),0!==s&&0!==r&&(u.css({right:r-(l+1)*s}),u.css({left:l*s}))}),o.not(a).each(function(){e(this.hash).hide()}),i.on("click","a",function(c){if(e(this).parent().hasClass("disabled"))return void c.preventDefault();if(!e(this).attr("target")){r=i.width(),s=Math.max(r,i[0].scrollWidth)/o.length,a.removeClass("active"),void 0!==n&&n.hide(),a=e(this),n=e(this.hash),o=i.find("li.tab a"),a.addClass("active");var d=l;l=o.index(e(this)),l<0&&(l=0),void 0!==n&&(n.show(),"function"==typeof t.onShow&&t.onShow.call(this,n)),l-d>=0?(u.velocity({right:r-(l+1)*s},{duration:300,queue:!1,easing:"easeOutQuad"}),u.velocity({left:l*s},{duration:300,queue:!1,easing:"easeOutQuad",delay:90})):(u.velocity({left:l*s},{duration:300,queue:!1,easing:"easeOutQuad"}),u.velocity({right:r-(l+1)*s},{duration:300,queue:!1,easing:"easeOutQuad",delay:90})),c.preventDefault()}})})},select_tab:function(e){this.find('a[href="#'+e+'"]').trigger("click")}};e.fn.tabs=function(i){return t[i]?t[i].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof i&&i?void e.error("Method "+i+" does not exist on jQuery.tooltip"):t.init.apply(this,arguments)},e(document).ready(function(){e("ul.tabs").tabs()})}(jQuery);