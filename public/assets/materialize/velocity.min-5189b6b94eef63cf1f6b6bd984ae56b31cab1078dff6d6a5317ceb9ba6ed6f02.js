jQuery.Velocity?console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity."):(!function(e){function t(e){var t=e.length,a=i.type(e);return"function"!==a&&!i.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===a||0===t||"number"==typeof t&&t>0&&t-1 in e))}if(!e.jQuery){var i=function(e,t){return new i.fn.init(e,t)};i.isWindow=function(e){return null!=e&&e==e.window},i.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[r.call(e)]||"object":typeof e},i.isArray=Array.isArray||function(e){return"array"===i.type(e)},i.isPlainObject=function(e){var t;if(!e||"object"!==i.type(e)||e.nodeType||i.isWindow(e))return!1;try{if(e.constructor&&!o.call(e,"constructor")&&!o.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}for(t in e);return void 0===t||o.call(e,t)},i.each=function(e,i,a){var n,o=0,r=e.length,s=t(e);if(a){if(s)for(;r>o&&(n=i.apply(e[o],a),n!==!1);o++);else for(o in e)if(n=i.apply(e[o],a),n===!1)break}else if(s)for(;r>o&&(n=i.call(e[o],o,e[o]),n!==!1);o++);else for(o in e)if(n=i.call(e[o],o,e[o]),n===!1)break;return e},i.data=function(e,t,n){if(void 0===n){var o=e[i.expando],r=o&&a[o];if(void 0===t)return r;if(r&&t in r)return r[t]}else if(void 0!==t){var o=e[i.expando]||(e[i.expando]=++i.uuid);return a[o]=a[o]||{},a[o][t]=n,n}},i.removeData=function(e,t){var n=e[i.expando],o=n&&a[n];o&&i.each(t,function(e,t){delete o[t]})},i.extend=function(){var e,t,a,n,o,r,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[l]||{},l++),"object"!=typeof s&&"function"!==i.type(s)&&(s={}),l===u&&(s=this,l--);u>l;l++)if(null!=(o=arguments[l]))for(n in o)e=s[n],a=o[n],s!==a&&(c&&a&&(i.isPlainObject(a)||(t=i.isArray(a)))?(t?(t=!1,r=e&&i.isArray(e)?e:[]):r=e&&i.isPlainObject(e)?e:{},s[n]=i.extend(c,r,a)):void 0!==a&&(s[n]=a));return s},i.queue=function(e,a,n){function o(e,i){var a=i||[];return null!=e&&(t(Object(e))?!function(e,t){for(var i=+t.length,a=0,n=e.length;i>a;)e[n++]=t[a++];if(i!==i)for(;void 0!==t[a];)e[n++]=t[a++];return e.length=n,e}(a,"string"==typeof e?[e]:e):[].push.call(a,e)),a}if(e){a=(a||"fx")+"queue";var r=i.data(e,a);return n?(!r||i.isArray(n)?r=i.data(e,a,o(n)):r.push(n),r):r||[]}},i.dequeue=function(e,t){i.each(e.nodeType?[e]:e,function(e,a){t=t||"fx";var n=i.queue(a,t),o=n.shift();"inprogress"===o&&(o=n.shift()),o&&("fx"===t&&n.unshift("inprogress"),o.call(a,function(){i.dequeue(a,t)}))})},i.fn=i.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var t=this[0],e=e.apply(t),a=this.offset(),n=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:i(e).offset();return a.top-=parseFloat(t.style.marginTop)||0,a.left-=parseFloat(t.style.marginLeft)||0,e.style&&(n.top+=parseFloat(e.style.borderTopWidth)||0,n.left+=parseFloat(e.style.borderLeftWidth)||0),{top:a.top-n.top,left:a.left-n.left}}};var a={};i.expando="velocity"+(new Date).getTime(),i.uuid=0;for(var n={},o=n.hasOwnProperty,r=n.toString,s="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;l<s.length;l++)n["[object "+s[l]+"]"]=s[l].toLowerCase();i.fn.init.prototype=i.fn,e.Velocity={Utilities:i}}}(window),function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){return function(e,t,i,a){function n(e){for(var t=-1,i=e?e.length:0,a=[];++t<i;){var n=e[t];n&&a.push(n)}return a}function o(e){return g.isWrapped(e)?e=[].slice.call(e):g.isNode(e)&&(e=[e]),e}function r(e){var t=p.data(e,"velocity");return null===t?a:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}function l(e,i,a,n){function o(e,t){return 1-3*t+3*e}function r(e,t){return 3*t-6*e}function s(e){return 3*e}function l(e,t,i){return((o(t,i)*e+r(t,i))*e+s(t))*e}function u(e,t,i){return 3*o(t,i)*e*e+2*r(t,i)*e+s(t)}function c(t,i){for(var n=0;g>n;++n){var o=u(i,e,a);if(0===o)return i;var r=l(i,e,a)-t;i-=r/o}return i}function d(){for(var t=0;y>t;++t)T[t]=l(t*k,e,a)}function p(t,i,n){var o,r,s=0;do r=i+(n-i)/2,o=l(r,e,a)-t,o>0?n=r:i=r;while(Math.abs(o)>b&&++s<v);return r}function h(t){for(var i=0,n=1,o=y-1;n!=o&&T[n]<=t;++n)i+=k;--n;var r=(t-T[n])/(T[n+1]-T[n]),s=i+r*k,l=u(s,e,a);return l>=f?c(t,s):0==l?s:p(t,i,i+k)}function m(){A=!0,(e!=i||a!=n)&&d()}var g=4,f=.001,b=1e-7,v=10,y=11,k=1/(y-1),w="Float32Array"in t;if(4!==arguments.length)return!1;for(var S=0;4>S;++S)if("number"!=typeof arguments[S]||isNaN(arguments[S])||!isFinite(arguments[S]))return!1;e=Math.min(e,1),a=Math.min(a,1),e=Math.max(e,0),a=Math.max(a,0);var T=w?new Float32Array(y):new Array(y),A=!1,C=function(t){return A||m(),e===i&&a===n?t:0===t?0:1===t?1:l(h(t),i,n)};C.getControlPoints=function(){return[{x:e,y:i},{x:a,y:n}]};var L="generateBezier("+[e,i,a,n]+")";return C.toString=function(){return L},C}function u(e,t){var i=e;return g.isString(e)?y.Easings[e]||(i=!1):i=g.isArray(e)&&1===e.length?s.apply(null,e):g.isArray(e)&&2===e.length?k.apply(null,e.concat([t])):!(!g.isArray(e)||4!==e.length)&&l.apply(null,e),i===!1&&(i=y.Easings[y.defaults.easing]?y.defaults.easing:v),i}function c(e){if(e){var t=(new Date).getTime(),i=y.State.calls.length;i>1e4&&(y.State.calls=n(y.State.calls));for(var o=0;i>o;o++)if(y.State.calls[o]){var s=y.State.calls[o],l=s[0],u=s[2],h=s[3],m=!!h,f=null;h||(h=y.State.calls[o][3]=t-16);for(var b=Math.min((t-h)/u.duration,1),v=0,k=l.length;k>v;v++){var S=l[v],A=S.element;if(r(A)){var C=!1;if(u.display!==a&&null!==u.display&&"none"!==u.display){if("flex"===u.display){var L=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];p.each(L,function(e,t){w.setPropertyValue(A,"display",t)})}w.setPropertyValue(A,"display",u.display)}u.visibility!==a&&"hidden"!==u.visibility&&w.setPropertyValue(A,"visibility",u.visibility);for(var x in S)if("element"!==x){var F,E=S[x],_=g.isString(E.easing)?y.Easings[E.easing]:E.easing;if(1===b)F=E.endValue;else{var D=E.endValue-E.startValue;if(F=E.startValue+D*_(b,u,D),!m&&F===E.currentValue)continue}if(E.currentValue=F,"tween"===x)f=F;else{if(w.Hooks.registered[x]){var I=w.Hooks.getRoot(x),P=r(A).rootPropertyValueCache[I];P&&(E.rootPropertyValue=P)}var R=w.setPropertyValue(A,x,E.currentValue+(0===parseFloat(F)?"":E.unitType),E.rootPropertyValue,E.scrollData);w.Hooks.registered[x]&&(r(A).rootPropertyValueCache[I]=w.Normalizations.registered[I]?w.Normalizations.registered[I]("extract",null,R[1]):R[1]),"transform"===R[0]&&(C=!0)}}u.mobileHA&&r(A).transformCache.translate3d===a&&(r(A).transformCache.translate3d="(0px, 0px, 0px)",C=!0),C&&w.flushTransformCache(A)}}u.display!==a&&"none"!==u.display&&(y.State.calls[o][2].display=!1),u.visibility!==a&&"hidden"!==u.visibility&&(y.State.calls[o][2].visibility=!1),u.progress&&u.progress.call(s[1],s[1],b,Math.max(0,h+u.duration-t),h,f),1===b&&d(o)}}y.State.isTicking&&T(c)}function d(e,t){if(!y.State.calls[e])return!1;for(var i=y.State.calls[e][0],n=y.State.calls[e][1],o=y.State.calls[e][2],s=y.State.calls[e][4],l=!1,u=0,c=i.length;c>u;u++){var d=i[u].element;if(t||o.loop||("none"===o.display&&w.setPropertyValue(d,"display",o.display),"hidden"===o.visibility&&w.setPropertyValue(d,"visibility",o.visibility)),o.loop!==!0&&(p.queue(d)[1]===a||!/\.velocityQueueEntryFlag/i.test(p.queue(d)[1]))&&r(d)){r(d).isAnimating=!1,r(d).rootPropertyValueCache={};var h=!1;p.each(w.Lists.transforms3D,function(e,t){var i=/^scale/.test(t)?1:0,n=r(d).transformCache[t];r(d).transformCache[t]!==a&&new RegExp("^\\("+i+"[^.]").test(n)&&(h=!0,delete r(d).transformCache[t])}),o.mobileHA&&(h=!0,delete r(d).transformCache.translate3d),h&&w.flushTransformCache(d),w.Values.removeClass(d,"velocity-animating")}if(!t&&o.complete&&!o.loop&&u===c-1)try{o.complete.call(n,n)}catch(e){setTimeout(function(){throw e},1)}s&&o.loop!==!0&&s(n),r(d)&&o.loop===!0&&!t&&(p.each(r(d).tweensContainer,function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360),/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType&&(t.endValue=0,t.startValue=100)}),y(d,"reverse",{loop:!0,delay:o.delay})),o.queue!==!1&&p.dequeue(d,o.queue)}y.State.calls[e]=!1;for(var m=0,g=y.State.calls.length;g>m;m++)if(y.State.calls[m]!==!1){l=!0;break}l===!1&&(y.State.isTicking=!1,delete y.State.calls,y.State.calls=[])}var p,h=function(){if(i.documentMode)return i.documentMode;for(var e=7;e>4;e--){var t=i.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return a}(),m=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var i,a=(new Date).getTime();return i=Math.max(0,16-(a-e)),e=a+i,setTimeout(function(){t(a+i)},i)}}(),g={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==a&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},f=!1;if(e.fn&&e.fn.jquery?(p=e,f=!0):p=t.Velocity.Utilities,8>=h&&!f)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=h)return void(jQuery.fn.velocity=jQuery.fn.animate);var b=400,v="swing",y={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:i.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:p,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:b,easing:v,begin:a,complete:a,progress:a,display:a,visibility:a,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){p.data(e,"velocity",{isSVG:g.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};t.pageYOffset!==a?(y.State.scrollAnchor=t,y.State.scrollPropertyLeft="pageXOffset",y.State.scrollPropertyTop="pageYOffset"):(y.State.scrollAnchor=i.documentElement||i.body.parentNode||i.body,y.State.scrollPropertyLeft="scrollLeft",y.State.scrollPropertyTop="scrollTop");var k=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,i,a){var n={x:t.x+a.dx*i,v:t.v+a.dv*i,tension:t.tension,friction:t.friction};return{dx:n.v,dv:e(n)}}function i(i,a){var n={dx:i.v,dv:e(i)},o=t(i,.5*a,n),r=t(i,.5*a,o),s=t(i,a,r),l=1/6*(n.dx+2*(o.dx+r.dx)+s.dx),u=1/6*(n.dv+2*(o.dv+r.dv)+s.dv);return i.x=i.x+l*a,i.v=i.v+u*a,i}return function e(t,a,n){var o,r,s,l={x:-1,v:0,tension:null,friction:null},u=[0],c=0,d=1e-4,p=.016;for(t=parseFloat(t)||500,a=parseFloat(a)||20,n=n||null,l.tension=t,l.friction=a,o=null!==n,o?(c=e(t,a),r=c/n*p):r=p;s=i(s||l,r),u.push(1+s.x),c+=16,Math.abs(s.x)>d&&Math.abs(s.v)>d;);return o?function(e){return u[e*(u.length-1)|0]}:c}}();y.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},p.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){y.Easings[t[0]]=l.apply(null,t[1])});var w=y.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<w.Lists.colors.length;e++){var t="color"===w.Lists.colors[e]?"0 0 0 1":"255 255 255 1";w.Hooks.templates[w.Lists.colors[e]]=["Red Green Blue Alpha",t]}var i,a,n;if(h)for(i in w.Hooks.templates){a=w.Hooks.templates[i],n=a[0].split(" ");var o=a[1].match(w.RegEx.valueSplit);"Color"===n[0]&&(n.push(n.shift()),o.push(o.shift()),w.Hooks.templates[i]=[n.join(" "),o.join(" ")])}for(i in w.Hooks.templates){a=w.Hooks.templates[i],n=a[0].split(" ");for(var e in n){var r=i+n[e],s=e;w.Hooks.registered[r]=[i,s]}}},getRoot:function(e){var t=w.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return w.RegEx.valueUnwrap.test(t)&&(t=t.match(w.RegEx.valueUnwrap)[1]),w.Values.isCSSNullValue(t)&&(t=w.Hooks.templates[e][1]),t},extractValue:function(e,t){var i=w.Hooks.registered[e];if(i){var a=i[0],n=i[1];return t=w.Hooks.cleanRootPropertyValue(a,t),t.toString().match(w.RegEx.valueSplit)[n]}return t},injectValue:function(e,t,i){var a=w.Hooks.registered[e];if(a){var n,o,r=a[0],s=a[1];return i=w.Hooks.cleanRootPropertyValue(r,i),n=i.toString().match(w.RegEx.valueSplit),n[s]=t,o=n.join(" ")}return i}},Normalizations:{registered:{clip:function(e,t,i){switch(e){case"name":return"clip";case"extract":var a;return w.RegEx.wrappedValueAlreadyExtracted.test(i)?a=i:(a=i.toString().match(w.RegEx.valueUnwrap),a=a?a[1].replace(/,(\s+)?/g," "):i),a;case"inject":return"rect("+i+")"}},blur:function(e,t,i){switch(e){case"name":return y.State.isFirefox?"filter":"-webkit-filter";case"extract":var a=parseFloat(i);if(!a&&0!==a){var n=i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);a=n?n[1]:0}return a;case"inject":return parseFloat(i)?"blur("+i+")":"none"}},opacity:function(e,t,i){if(8>=h)switch(e){case"name":return"filter";case"extract":var a=i.toString().match(/alpha\(opacity=(.*)\)/i);return i=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(i)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(i),10)+")"}else switch(e){case"name":return"opacity";case"extract":return i;case"inject":return i}}},register:function(){9>=h||y.State.isGingerbread||(w.Lists.transformsBase=w.Lists.transformsBase.concat(w.Lists.transforms3D));for(var e=0;e<w.Lists.transformsBase.length;e++)!function(){var t=w.Lists.transformsBase[e];w.Normalizations.registered[t]=function(e,i,n){switch(e){case"name":return"transform";case"extract":return r(i)===a||r(i).transformCache[t]===a?/^scale/i.test(t)?1:0:r(i).transformCache[t].replace(/[()]/g,"");case"inject":var o=!1;switch(t.substr(0,t.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(n);break;case"scal":case"scale":y.State.isAndroid&&r(i).transformCache[t]===a&&1>n&&(n=1),o=!/(\d)$/i.test(n);break;case"skew":o=!/(deg|\d)$/i.test(n);break;case"rotate":o=!/(deg|\d)$/i.test(n)}return o||(r(i).transformCache[t]="("+n+")"),r(i).transformCache[t]}}}();for(var e=0;e<w.Lists.colors.length;e++)!function(){var t=w.Lists.colors[e];w.Normalizations.registered[t]=function(e,i,n){switch(e){case"name":return t;case"extract":var o;if(w.RegEx.wrappedValueAlreadyExtracted.test(n))o=n;else{var r,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(n)?r=s[n]!==a?s[n]:s.black:w.RegEx.isHex.test(n)?r="rgb("+w.Values.hexToRgb(n).join(" ")+")":/^rgba?\(/i.test(n)||(r=s.black),o=(r||n).toString().match(w.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=h||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return 8>=h?4===n.split(" ").length&&(n=n.split(/\s+/).slice(0,3).join(" ")):3===n.split(" ").length&&(n+=" 1"),(8>=h?"rgb":"rgba")+"("+n.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(h||y.State.isAndroid&&!y.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(y.State.prefixMatches[e])return[y.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],i=0,a=t.length;a>i;i++){var n;if(n=0===i?e:t[i]+e.replace(/^\w/,function(e){return e.toUpperCase()}),g.isString(y.State.prefixElement.style[n]))return y.State.prefixMatches[e]=n,[n,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t,i=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return e=e.replace(i,function(e,t,i,a){return t+t+i+i+a+a}),t=a.exec(e),t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,i,n,o){function s(e,i){function n(){u&&w.setPropertyValue(e,"display","none")}var l=0;if(8>=h)l=p.css(e,i);else{var u=!1;if(/^(width|height)$/.test(i)&&0===w.getPropertyValue(e,"display")&&(u=!0,w.setPropertyValue(e,"display",w.Values.getDisplayType(e))),!o){if("height"===i&&"border-box"!==w.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(w.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(w.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(w.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(w.getPropertyValue(e,"paddingBottom"))||0);return n(),c}if("width"===i&&"border-box"!==w.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var d=e.offsetWidth-(parseFloat(w.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(w.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(w.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(w.getPropertyValue(e,"paddingRight"))||0);return n(),d}}var m;m=r(e)===a?t.getComputedStyle(e,null):r(e).computedStyle?r(e).computedStyle:r(e).computedStyle=t.getComputedStyle(e,null),"borderColor"===i&&(i="borderTopColor"),l=9===h&&"filter"===i?m.getPropertyValue(i):m[i],(""===l||null===l)&&(l=e.style[i]),n()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(i)){var g=s(e,"position");("fixed"===g||"absolute"===g&&/top|left/i.test(i))&&(l=p(e).position()[i]+"px")}return l}var l;if(w.Hooks.registered[i]){var u=i,c=w.Hooks.getRoot(u);n===a&&(n=w.getPropertyValue(e,w.Names.prefixCheck(c)[0])),w.Normalizations.registered[c]&&(n=w.Normalizations.registered[c]("extract",e,n)),l=w.Hooks.extractValue(u,n)}else if(w.Normalizations.registered[i]){var d,m;d=w.Normalizations.registered[i]("name",e),"transform"!==d&&(m=s(e,w.Names.prefixCheck(d)[0]),w.Values.isCSSNullValue(m)&&w.Hooks.templates[i]&&(m=w.Hooks.templates[i][1])),l=w.Normalizations.registered[i]("extract",e,m)}if(!/^[\d-]/.test(l))if(r(e)&&r(e).isSVG&&w.Names.SVGAttribute(i))if(/^(height|width)$/i.test(i))try{l=e.getBBox()[i]}catch(e){l=0}else l=e.getAttribute(i);else l=s(e,w.Names.prefixCheck(i)[0]);return w.Values.isCSSNullValue(l)&&(l=0),y.debug>=2&&console.log("Get "+i+": "+l),l},setPropertyValue:function(e,i,a,n,o){var s=i;if("scroll"===i)o.container?o.container["scroll"+o.direction]=a:"Left"===o.direction?t.scrollTo(a,o.alternateValue):t.scrollTo(o.alternateValue,a);else if(w.Normalizations.registered[i]&&"transform"===w.Normalizations.registered[i]("name",e))w.Normalizations.registered[i]("inject",e,a),s="transform",a=r(e).transformCache[i];else{if(w.Hooks.registered[i]){var l=i,u=w.Hooks.getRoot(i);n=n||w.getPropertyValue(e,u),a=w.Hooks.injectValue(l,a,n),i=u}if(w.Normalizations.registered[i]&&(a=w.Normalizations.registered[i]("inject",e,a),i=w.Normalizations.registered[i]("name",e)),s=w.Names.prefixCheck(i)[0],8>=h)try{e.style[s]=a}catch(e){y.debug&&console.log("Browser does not support ["+a+"] for ["+s+"]")}else r(e)&&r(e).isSVG&&w.Names.SVGAttribute(i)?e.setAttribute(i,a):e.style[s]=a;y.debug>=2&&console.log("Set "+i+" ("+s+"): "+a)}return[s,a]},flushTransformCache:function(e){function t(t){return parseFloat(w.getPropertyValue(e,t))}var i="";if((h||y.State.isAndroid&&!y.State.isChrome)&&r(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};p.each(r(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(i+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var n,o;p.each(r(e).transformCache,function(t){return n=r(e).transformCache[t],"transformPerspective"===t?(o=n,!0):(9===h&&"rotateZ"===t&&(t="rotate"),void(i+=t+n+" "))}),o&&(i="perspective"+o+" "+i)}w.setPropertyValue(e,"transform",i)}};w.Hooks.register(),w.Normalizations.register(),y.hook=function(e,t,i){var n=a;return e=o(e),p.each(e,function(e,o){if(r(o)===a&&y.init(o),i===a)n===a&&(n=y.CSS.getPropertyValue(o,t));else{var s=y.CSS.setPropertyValue(o,t,i);"transform"===s[0]&&y.CSS.flushTransformCache(o),n=s}}),n};var S=function(){function e(){return s?x.promise||null:l}function n(){function e(){function e(e,t){var i=a,n=a,r=a;return g.isArray(e)?(i=e[0],!g.isArray(e[1])&&/^[\d-]/.test(e[1])||g.isFunction(e[1])||w.RegEx.isHex.test(e[1])?r=e[1]:(g.isString(e[1])&&!w.RegEx.isHex.test(e[1])||g.isArray(e[1]))&&(n=t?e[1]:u(e[1],s.duration),e[2]!==a&&(r=e[2]))):i=e,t||(n=n||s.easing),g.isFunction(i)&&(i=i.call(o,A,T)),g.isFunction(r)&&(r=r.call(o,A,T)),[i||0,n,r]}function d(e,t){var i,a;return a=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return i=e,""}),i||(i=w.Values.getUnitType(e)),[a,i]}function h(){var e={myParent:o.parentNode||i.body,position:w.getPropertyValue(o,"position"),fontSize:w.getPropertyValue(o,"fontSize")},a=e.position===R.lastPosition&&e.myParent===R.lastParent,n=e.fontSize===R.lastFontSize;R.lastParent=e.myParent,R.lastPosition=e.position,R.lastFontSize=e.fontSize;var s=100,l={};if(n&&a)l.emToPx=R.lastEmToPx,l.percentToPxWidth=R.lastPercentToPxWidth,l.percentToPxHeight=R.lastPercentToPxHeight;else{var u=r(o).isSVG?i.createElementNS("http://www.w3.org/2000/svg","rect"):i.createElement("div");y.init(u),e.myParent.appendChild(u),p.each(["overflow","overflowX","overflowY"],function(e,t){y.CSS.setPropertyValue(u,t,"hidden")}),y.CSS.setPropertyValue(u,"position",e.position),y.CSS.setPropertyValue(u,"fontSize",e.fontSize),y.CSS.setPropertyValue(u,"boxSizing","content-box"),p.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){y.CSS.setPropertyValue(u,t,s+"%")}),y.CSS.setPropertyValue(u,"paddingLeft",s+"em"),l.percentToPxWidth=R.lastPercentToPxWidth=(parseFloat(w.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=R.lastPercentToPxHeight=(parseFloat(w.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=R.lastEmToPx=(parseFloat(w.getPropertyValue(u,"paddingLeft"))||1)/s,e.myParent.removeChild(u)}return null===R.remToPx&&(R.remToPx=parseFloat(w.getPropertyValue(i.body,"fontSize"))||16),null===R.vwToPx&&(R.vwToPx=parseFloat(t.innerWidth)/100,R.vhToPx=parseFloat(t.innerHeight)/100),l.remToPx=R.remToPx,l.vwToPx=R.vwToPx,l.vhToPx=R.vhToPx,y.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),o),l}if(s.begin&&0===A)try{s.begin.call(m,m)}catch(e){setTimeout(function(){throw e},1)}if("scroll"===F){var b,k,S,C=/^x$/i.test(s.axis)?"Left":"Top",L=parseFloat(s.offset)||0;s.container?g.isWrapped(s.container)||g.isNode(s.container)?(s.container=s.container[0]||s.container,b=s.container["scroll"+C],S=b+p(o).position()[C.toLowerCase()]+L):s.container=null:(b=y.State.scrollAnchor[y.State["scrollProperty"+C]],k=y.State.scrollAnchor[y.State["scrollProperty"+("Left"===C?"Top":"Left")]],S=p(o).offset()[C.toLowerCase()]+L),l={scroll:{rootPropertyValue:!1,startValue:b,currentValue:b,endValue:S,unitType:"",easing:s.easing,scrollData:{container:s.container,direction:C,alternateValue:k}},element:o},y.debug&&console.log("tweensContainer (scroll): ",l.scroll,o)}else if("reverse"===F){if(!r(o).tweensContainer)return void p.dequeue(o,s.queue);"none"===r(o).opts.display&&(r(o).opts.display="auto"),"hidden"===r(o).opts.visibility&&(r(o).opts.visibility="visible"),r(o).opts.loop=!1,r(o).opts.begin=null,r(o).opts.complete=null,v.easing||delete s.easing,v.duration||delete s.duration,s=p.extend({},r(o).opts,s);var E=p.extend(!0,{},r(o).tweensContainer);for(var _ in E)if("element"!==_){var D=E[_].startValue;E[_].startValue=E[_].currentValue=E[_].endValue,E[_].endValue=D,g.isEmptyObject(v)||(E[_].easing=s.easing),y.debug&&console.log("reverse tweensContainer ("+_+"): "+JSON.stringify(E[_]),o)}l=E}else if("start"===F){var E;r(o).tweensContainer&&r(o).isAnimating===!0&&(E=r(o).tweensContainer),p.each(f,function(t,i){if(RegExp("^"+w.Lists.colors.join("$|^")+"$").test(t)){var n=e(i,!0),o=n[0],r=n[1],s=n[2];if(w.RegEx.isHex.test(o)){for(var l=["Red","Green","Blue"],u=w.Values.hexToRgb(o),c=s?w.Values.hexToRgb(s):a,d=0;d<l.length;d++){var p=[u[d]];r&&p.push(r),c!==a&&p.push(c[d]),f[t+l[d]]=p}delete f[t]}}});for(var I in f){var P=e(f[I]),N=P[0],B=P[1],M=P[2];I=w.Names.camelCase(I);var j=w.Hooks.getRoot(I),O=!1;if(r(o).isSVG||"tween"===j||w.Names.prefixCheck(j)[1]!==!1||w.Normalizations.registered[j]!==a){(s.display!==a&&null!==s.display&&"none"!==s.display||s.visibility!==a&&"hidden"!==s.visibility)&&/opacity|filter/.test(I)&&!M&&0!==N&&(M=0),s._cacheValues&&E&&E[I]?(M===a&&(M=E[I].endValue+E[I].unitType),O=r(o).rootPropertyValueCache[j]):w.Hooks.registered[I]?M===a?(O=w.getPropertyValue(o,j),M=w.getPropertyValue(o,I,O)):O=w.Hooks.templates[j][1]:M===a&&(M=w.getPropertyValue(o,I));var H,W,q,V=!1;if(H=d(I,M),M=H[0],q=H[1],H=d(I,N),N=H[0].replace(/^([+-\/*])=/,function(e,t){return V=t,""}),W=H[1],M=parseFloat(M)||0,N=parseFloat(N)||0,"%"===W&&(/^(fontSize|lineHeight)$/.test(I)?(N/=100,W="em"):/^scale/.test(I)?(N/=100,W=""):/(Red|Green|Blue)$/i.test(I)&&(N=N/100*255,W="")),/[\/*]/.test(V))W=q;else if(q!==W&&0!==M)if(0===N)W=q;else{n=n||h();var U=/margin|padding|left|right|width|text|word|letter/i.test(I)||/X$/.test(I)||"x"===I?"x":"y";switch(q){case"%":M*="x"===U?n.percentToPxWidth:n.percentToPxHeight;break;case"px":break;default:M*=n[q+"ToPx"]}switch(W){case"%":M*=1/("x"===U?n.percentToPxWidth:n.percentToPxHeight);break;case"px":break;default:M*=1/n[W+"ToPx"]}}switch(V){case"+":N=M+N;break;case"-":N=M-N;break;case"*":N=M*N;break;case"/":N=M/N}l[I]={rootPropertyValue:O,startValue:M,currentValue:M,endValue:N,unitType:W,easing:B},y.debug&&console.log("tweensContainer ("+I+"): "+JSON.stringify(l[I]),o)}else y.debug&&console.log("Skipping ["+j+"] due to a lack of browser support.")}l.element=o}l.element&&(w.Values.addClass(o,"velocity-animating"),z.push(l),""===s.queue&&(r(o).tweensContainer=l,r(o).opts=s),r(o).isAnimating=!0,A===T-1?(y.State.calls.push([z,m,s,null,x.resolver]),y.State.isTicking===!1&&(y.State.isTicking=!0,c())):A++)}var n,o=this,s=p.extend({},y.defaults,v),l={};switch(r(o)===a&&y.init(o),parseFloat(s.delay)&&s.queue!==!1&&p.queue(o,s.queue,function(e){y.velocityQueueEntryFlag=!0,r(o).delayTimer={setTimeout:setTimeout(e,parseFloat(s.delay)),next:e}}),s.duration.toString().toLowerCase()){case"fast":s.duration=200;break;case"normal":s.duration=b;break;case"slow":s.duration=600;break;default:s.duration=parseFloat(s.duration)||1}y.mock!==!1&&(y.mock===!0?s.duration=s.delay=1:(s.duration*=parseFloat(y.mock)||1,s.delay*=parseFloat(y.mock)||1)),s.easing=u(s.easing,s.duration),s.begin&&!g.isFunction(s.begin)&&(s.begin=null),s.progress&&!g.isFunction(s.progress)&&(s.progress=null),s.complete&&!g.isFunction(s.complete)&&(s.complete=null),s.display!==a&&null!==s.display&&(s.display=s.display.toString().toLowerCase(),"auto"===s.display&&(s.display=y.CSS.Values.getDisplayType(o))),s.visibility!==a&&null!==s.visibility&&(s.visibility=s.visibility.toString().toLowerCase()),s.mobileHA=s.mobileHA&&y.State.isMobile&&!y.State.isGingerbread,s.queue===!1?s.delay?setTimeout(e,s.delay):e():p.queue(o,s.queue,function(t,i){return i===!0?(x.promise&&x.resolver(m),!0):(y.velocityQueueEntryFlag=!0,void e(t))}),""!==s.queue&&"fx"!==s.queue||"inprogress"===p.queue(o)[0]||p.dequeue(o)}var s,l,h,m,f,v,k=arguments[0]&&(arguments[0].p||p.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||g.isString(arguments[0].properties));if(g.isWrapped(this)?(s=!1,h=0,m=this,l=this):(s=!0,h=1,m=k?arguments[0].elements||arguments[0].e:arguments[0]),m=o(m)){k?(f=arguments[0].properties||arguments[0].p,v=arguments[0].options||arguments[0].o):(f=arguments[h],v=arguments[h+1]);var T=m.length,A=0;if(!/^(stop|finish)$/i.test(f)&&!p.isPlainObject(v)){var C=h+1;v={};for(var L=C;L<arguments.length;L++)g.isArray(arguments[L])||!/^(fast|normal|slow)$/i.test(arguments[L])&&!/^\d/.test(arguments[L])?g.isString(arguments[L])||g.isArray(arguments[L])?v.easing=arguments[L]:g.isFunction(arguments[L])&&(v.complete=arguments[L]):v.duration=arguments[L]}var x={promise:null,resolver:null,rejecter:null};s&&y.Promise&&(x.promise=new y.Promise(function(e,t){x.resolver=e,x.rejecter=t}));var F;switch(f){case"scroll":F="scroll";break;case"reverse":F="reverse";break;case"finish":case"stop":p.each(m,function(e,t){r(t)&&r(t).delayTimer&&(clearTimeout(r(t).delayTimer.setTimeout),r(t).delayTimer.next&&r(t).delayTimer.next(),delete r(t).delayTimer)});var E=[];return p.each(y.State.calls,function(e,t){t&&p.each(t[1],function(i,n){var o=v===a?"":v;return o!==!0&&t[2].queue!==o&&(v!==a||t[2].queue!==!1)||void p.each(m,function(i,a){a===n&&((v===!0||g.isString(v))&&(p.each(p.queue(a,g.isString(v)?v:""),function(e,t){g.isFunction(t)&&t(null,!0)}),p.queue(a,g.isString(v)?v:"",[])),"stop"===f?(r(a)&&r(a).tweensContainer&&o!==!1&&p.each(r(a).tweensContainer,function(e,t){t.endValue=t.currentValue}),E.push(e)):"finish"===f&&(t[2].duration=1))})})}),"stop"===f&&(p.each(E,function(e,t){d(t,!0)}),x.promise&&x.resolver(m)),e();default:if(!p.isPlainObject(f)||g.isEmptyObject(f)){if(g.isString(f)&&y.Redirects[f]){var _=p.extend({},v),D=_.duration,I=_.delay||0;return _.backwards===!0&&(m=p.extend(!0,[],m).reverse()),p.each(m,function(e,t){parseFloat(_.stagger)?_.delay=I+parseFloat(_.stagger)*e:g.isFunction(_.stagger)&&(_.delay=I+_.stagger.call(t,e,T)),_.drag&&(_.duration=parseFloat(D)||(/^(callout|transition)/.test(f)?1e3:b),_.duration=Math.max(_.duration*(_.backwards?1-e/T:(e+1)/T),.75*_.duration,200)),
y.Redirects[f].call(t,t,_||{},e,T,m,x.promise?x:a)}),e()}var P="Velocity: First argument ("+f+") was not a property map, a known action, or a registered redirect. Aborting.";return x.promise?x.rejecter(new Error(P)):console.log(P),e()}F="start"}var R={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},z=[];p.each(m,function(e,t){g.isNode(t)&&n.call(t)});var N,_=p.extend({},y.defaults,v);if(_.loop=parseInt(_.loop),N=2*_.loop-1,_.loop)for(var B=0;N>B;B++){var M={delay:_.delay,progress:_.progress};B===N-1&&(M.display=_.display,M.visibility=_.visibility,M.complete=_.complete),S(m,"reverse",M)}return e()}};y=p.extend(S,y),y.animate=S;var T=t.requestAnimationFrame||m;return y.State.isMobile||i.hidden===a||i.addEventListener("visibilitychange",function(){i.hidden?(T=function(e){return setTimeout(function(){e(!0)},16)},c()):T=t.requestAnimationFrame||m}),e.Velocity=y,e!==t&&(e.fn.velocity=S,e.fn.velocity.defaults=y.defaults),p.each(["Down","Up"],function(e,t){y.Redirects["slide"+t]=function(e,i,n,o,r,s){var l=p.extend({},i),u=l.begin,c=l.complete,d={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},h={};l.display===a&&(l.display="Down"===t?"inline"===y.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){u&&u.call(r,r);for(var i in d){h[i]=e.style[i];var a=y.CSS.getPropertyValue(e,i);d[i]="Down"===t?[a,0]:[0,a]}h.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in h)e.style[t]=h[t];c&&c.call(r,r),s&&s.resolver(r)},y(e,d,l)}}),p.each(["In","Out"],function(e,t){y.Redirects["fade"+t]=function(e,i,n,o,r,s){var l=p.extend({},i),u={opacity:"In"===t?1:0},c=l.complete;l.complete=n!==o-1?l.begin=null:function(){c&&c.call(r,r),s&&s.resolver(r)},l.display===a&&(l.display="In"===t?"auto":"none"),y(this,u,l)}}),y}(window.jQuery||window.Zepto||window,window,document)}));