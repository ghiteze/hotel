!function(e){Materialize.fadeInImage=function(t){var i;if("string"==typeof t)i=e(t);else{if("object"!=typeof t)return;i=t}i.css({opacity:0}),e(i).velocity({opacity:1},{duration:650,queue:!1,easing:"easeOutSine"}),e(i).velocity({opacity:1},{duration:1300,queue:!1,easing:"swing",step:function(t,i){i.start=100;var a=t/100,n=150-(100-t)/1.75;n<100&&(n=100),t>=0&&e(this).css({"-webkit-filter":"grayscale("+a+")brightness("+n+"%)",filter:"grayscale("+a+")brightness("+n+"%)"})}})},Materialize.showStaggeredList=function(t){var i;if("string"==typeof t)i=e(t);else{if("object"!=typeof t)return;i=t}var a=0;i.find("li").velocity({translateX:"-100px"},{duration:0}),i.find("li").each(function(){e(this).velocity({opacity:"1",translateX:"0"},{duration:800,delay:a,easing:[60,10]}),a+=120})},e(document).ready(function(){var t=!1,i=!1;e(".dismissable").each(function(){e(this).hammer({prevent_default:!1}).bind("pan",function(a){if("touch"===a.gesture.pointerType){var n=e(this),o=a.gesture.direction,r=a.gesture.deltaX,s=a.gesture.velocityX;n.velocity({translateX:r},{duration:50,queue:!1,easing:"easeOutQuad"}),4===o&&(r>n.innerWidth()/2||s<-.75)&&(t=!0),2===o&&(r<-1*n.innerWidth()/2||s>.75)&&(i=!0)}}).bind("panend",function(a){if(Math.abs(a.gesture.deltaX)<e(this).innerWidth()/2&&(i=!1,t=!1),"touch"===a.gesture.pointerType){var n=e(this);if(t||i){var o;o=t?n.innerWidth():-1*n.innerWidth(),n.velocity({translateX:o},{duration:100,queue:!1,easing:"easeOutQuad",complete:function(){n.css("border","none"),n.velocity({height:0,padding:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){n.remove()}})}})}else n.velocity({translateX:0},{duration:100,queue:!1,easing:"easeOutQuad"});t=!1,i=!1}})})})}(jQuery);