!function(e){var t={init:function(t){var i={indicators:!0,height:400,transition:500,interval:6e3};return t=e.extend(i,t),this.each(function(){function i(e,t){e.hasClass("center-align")?e.velocity({opacity:0,translateY:-100},{duration:t,queue:!1}):e.hasClass("right-align")?e.velocity({opacity:0,translateX:100},{duration:t,queue:!1}):e.hasClass("left-align")&&e.velocity({opacity:0,translateX:-100},{duration:t,queue:!1})}function a(e){e>=u.length?e=0:e<0&&(e=u.length-1),c=l.find(".active").index(),c!=e&&(n=u.eq(c),$caption=n.find(".caption"),n.removeClass("active"),n.velocity({opacity:0},{duration:t.transition,queue:!1,easing:"easeOutQuad",complete:function(){u.not(".active").velocity({opacity:0,translateX:0,translateY:0},{duration:0,queue:!1})}}),i($caption,t.transition),t.indicators&&o.eq(c).removeClass("active"),u.eq(e).velocity({opacity:1},{duration:t.transition,queue:!1,easing:"easeOutQuad"}),u.eq(e).find(".caption").velocity({opacity:1,translateX:0,translateY:0},{duration:t.transition,delay:t.transition,queue:!1,easing:"easeOutQuad"}),u.eq(e).addClass("active"),t.indicators&&o.eq(e).addClass("active"))}var n,o,r,s=e(this),l=s.find("ul.slides").first(),u=l.find("> li"),c=l.find(".active").index();c!=-1&&(n=u.eq(c)),s.hasClass("fullscreen")||(t.indicators?s.height(t.height+40):s.height(t.height),l.height(t.height)),u.find(".caption").each(function(){i(e(this),0)}),u.find("img").each(function(){var t="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";e(this).attr("src")!==t&&(e(this).css("background-image","url("+e(this).attr("src")+")"),e(this).attr("src",t))}),t.indicators&&(o=e('<ul class="indicators"></ul>'),u.each(function(){var i=e('<li class="indicator-item"></li>');i.click(function(){var i=l.parent(),n=i.find(e(this)).index();a(n),clearInterval(r),r=setInterval(function(){c=l.find(".active").index(),u.length==c+1?c=0:c+=1,a(c)},t.transition+t.interval)}),o.append(i)}),s.append(o),o=s.find("ul.indicators").find("li.indicator-item")),n?n.show():(u.first().addClass("active").velocity({opacity:1},{duration:t.transition,queue:!1,easing:"easeOutQuad"}),c=0,n=u.eq(c),t.indicators&&o.eq(c).addClass("active")),n.find("img").each(function(){n.find(".caption").velocity({opacity:1,translateX:0,translateY:0},{duration:t.transition,queue:!1,easing:"easeOutQuad"})}),r=setInterval(function(){c=l.find(".active").index(),a(c+1)},t.transition+t.interval);var d=!1,p=!1,h=!1;s.hammer({prevent_default:!1}).bind("pan",function(e){if("touch"===e.gesture.pointerType){clearInterval(r);var t=e.gesture.direction,i=e.gesture.deltaX,a=e.gesture.velocityX;$curr_slide=l.find(".active"),$curr_slide.velocity({translateX:i},{duration:50,queue:!1,easing:"easeOutQuad"}),4===t&&(i>s.innerWidth()/2||a<-.65)?h=!0:2===t&&(i<-1*s.innerWidth()/2||a>.65)&&(p=!0);var n;p&&(n=$curr_slide.next(),0===n.length&&(n=u.first()),n.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad"})),h&&(n=$curr_slide.prev(),0===n.length&&(n=u.last()),n.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad"}))}}).bind("panend",function(e){"touch"===e.gesture.pointerType&&($curr_slide=l.find(".active"),d=!1,curr_index=l.find(".active").index(),!h&&!p||u.length<=1?$curr_slide.velocity({translateX:0},{duration:300,queue:!1,easing:"easeOutQuad"}):p?(a(curr_index+1),$curr_slide.velocity({translateX:-1*s.innerWidth()},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){$curr_slide.velocity({opacity:0,translateX:0},{duration:0,queue:!1})}})):h&&(a(curr_index-1),$curr_slide.velocity({translateX:s.innerWidth()},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){$curr_slide.velocity({opacity:0,translateX:0},{duration:0,queue:!1})}})),p=!1,h=!1,clearInterval(r),r=setInterval(function(){c=l.find(".active").index(),u.length==c+1?c=0:c+=1,a(c)},t.transition+t.interval))}),s.on("sliderPause",function(){clearInterval(r)}),s.on("sliderStart",function(){clearInterval(r),r=setInterval(function(){c=l.find(".active").index(),u.length==c+1?c=0:c+=1,a(c)},t.transition+t.interval)}),s.on("sliderNext",function(){c=l.find(".active").index(),a(c+1)}),s.on("sliderPrev",function(){c=l.find(".active").index(),a(c-1)})})},pause:function(){e(this).trigger("sliderPause")},start:function(){e(this).trigger("sliderStart")},next:function(){e(this).trigger("sliderNext")},prev:function(){e(this).trigger("sliderPrev")}};e.fn.slider=function(i){return t[i]?t[i].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof i&&i?void e.error("Method "+i+" does not exist on jQuery.tooltip"):t.init.apply(this,arguments)}}(jQuery);