jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,t,i,a,n){return jQuery.easing[jQuery.easing.def](e,t,i,a,n)},easeInQuad:function(e,t,i,a,n){return a*(t/=n)*t+i},easeOutQuad:function(e,t,i,a,n){return-a*(t/=n)*(t-2)+i},easeInOutQuad:function(e,t,i,a,n){return(t/=n/2)<1?a/2*t*t+i:-a/2*(--t*(t-2)-1)+i},easeInCubic:function(e,t,i,a,n){return a*(t/=n)*t*t+i},easeOutCubic:function(e,t,i,a,n){return a*((t=t/n-1)*t*t+1)+i},easeInOutCubic:function(e,t,i,a,n){return(t/=n/2)<1?a/2*t*t*t+i:a/2*((t-=2)*t*t+2)+i},easeInQuart:function(e,t,i,a,n){return a*(t/=n)*t*t*t+i},easeOutQuart:function(e,t,i,a,n){return-a*((t=t/n-1)*t*t*t-1)+i},easeInOutQuart:function(e,t,i,a,n){return(t/=n/2)<1?a/2*t*t*t*t+i:-a/2*((t-=2)*t*t*t-2)+i},easeInQuint:function(e,t,i,a,n){return a*(t/=n)*t*t*t*t+i},easeOutQuint:function(e,t,i,a,n){return a*((t=t/n-1)*t*t*t*t+1)+i},easeInOutQuint:function(e,t,i,a,n){return(t/=n/2)<1?a/2*t*t*t*t*t+i:a/2*((t-=2)*t*t*t*t+2)+i},easeInSine:function(e,t,i,a,n){return-a*Math.cos(t/n*(Math.PI/2))+a+i},easeOutSine:function(e,t,i,a,n){return a*Math.sin(t/n*(Math.PI/2))+i},easeInOutSine:function(e,t,i,a,n){return-a/2*(Math.cos(Math.PI*t/n)-1)+i},easeInExpo:function(e,t,i,a,n){return 0==t?i:a*Math.pow(2,10*(t/n-1))+i},easeOutExpo:function(e,t,i,a,n){return t==n?i+a:a*(-Math.pow(2,-10*t/n)+1)+i},easeInOutExpo:function(e,t,i,a,n){return 0==t?i:t==n?i+a:(t/=n/2)<1?a/2*Math.pow(2,10*(t-1))+i:a/2*(-Math.pow(2,-10*--t)+2)+i},easeInCirc:function(e,t,i,a,n){return-a*(Math.sqrt(1-(t/=n)*t)-1)+i},easeOutCirc:function(e,t,i,a,n){return a*Math.sqrt(1-(t=t/n-1)*t)+i},easeInOutCirc:function(e,t,i,a,n){return(t/=n/2)<1?-a/2*(Math.sqrt(1-t*t)-1)+i:a/2*(Math.sqrt(1-(t-=2)*t)+1)+i},easeInElastic:function(e,t,i,a,n){var o=1.70158,r=0,s=a;if(0==t)return i;if(1==(t/=n))return i+a;if(r||(r=.3*n),s<Math.abs(a)){s=a;var o=r/4}else var o=r/(2*Math.PI)*Math.asin(a/s);return-(s*Math.pow(2,10*(t-=1))*Math.sin((t*n-o)*(2*Math.PI)/r))+i},easeOutElastic:function(e,t,i,a,n){var o=1.70158,r=0,s=a;if(0==t)return i;if(1==(t/=n))return i+a;if(r||(r=.3*n),s<Math.abs(a)){s=a;var o=r/4}else var o=r/(2*Math.PI)*Math.asin(a/s);return s*Math.pow(2,-10*t)*Math.sin((t*n-o)*(2*Math.PI)/r)+a+i},easeInOutElastic:function(e,t,i,a,n){var o=1.70158,r=0,s=a;if(0==t)return i;if(2==(t/=n/2))return i+a;if(r||(r=n*(.3*1.5)),s<Math.abs(a)){s=a;var o=r/4}else var o=r/(2*Math.PI)*Math.asin(a/s);return t<1?-.5*(s*Math.pow(2,10*(t-=1))*Math.sin((t*n-o)*(2*Math.PI)/r))+i:s*Math.pow(2,-10*(t-=1))*Math.sin((t*n-o)*(2*Math.PI)/r)*.5+a+i},easeInBack:function(e,t,i,a,n,o){return void 0==o&&(o=1.70158),a*(t/=n)*t*((o+1)*t-o)+i},easeOutBack:function(e,t,i,a,n,o){return void 0==o&&(o=1.70158),a*((t=t/n-1)*t*((o+1)*t+o)+1)+i},easeInOutBack:function(e,t,i,a,n,o){return void 0==o&&(o=1.70158),(t/=n/2)<1?a/2*(t*t*(((o*=1.525)+1)*t-o))+i:a/2*((t-=2)*t*(((o*=1.525)+1)*t+o)+2)+i},easeInBounce:function(e,t,i,a,n){return a-jQuery.easing.easeOutBounce(e,n-t,0,a,n)+i},easeOutBounce:function(e,t,i,a,n){return(t/=n)<1/2.75?a*(7.5625*t*t)+i:t<2/2.75?a*(7.5625*(t-=1.5/2.75)*t+.75)+i:t<2.5/2.75?a*(7.5625*(t-=2.25/2.75)*t+.9375)+i:a*(7.5625*(t-=2.625/2.75)*t+.984375)+i},easeInOutBounce:function(e,t,i,a,n){return t<n/2?.5*jQuery.easing.easeInBounce(e,2*t,0,a,n)+i:.5*jQuery.easing.easeOutBounce(e,2*t-n,0,a,n)+.5*a+i}});