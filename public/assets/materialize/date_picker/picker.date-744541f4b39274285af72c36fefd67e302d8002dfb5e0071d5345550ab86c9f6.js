!function(e){"function"==typeof define&&define.amd?define(["picker","jquery"],e):"object"==typeof exports?module.exports=e(require("./picker.js"),require("jquery")):e(Picker,jQuery)}(function(e,t){function i(e,t){var i=this,a=e.$node[0],n=a.value,o=e.$node.data("value"),r=o||n,s=o?t.formatSubmit:t.format,l=function(){return a.currentStyle?"rtl"==a.currentStyle.direction:"rtl"==getComputedStyle(e.$root[0]).direction};i.settings=t,i.$node=e.$node,i.queue={min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"parse navigate create validate",view:"parse create validate viewset",disable:"deactivate",enable:"activate"},i.item={},i.item.clear=null,i.item.disable=(t.disable||[]).slice(0),i.item.enable=-function(e){return e[0]===!0?e.shift():-1}(i.item.disable),i.set("min",t.min).set("max",t.max).set("now"),r?i.set("select",r,{format:s}):i.set("select",null).set("highlight",i.item.now),i.key={40:7,38:-7,39:function(){return l()?-1:1},37:function(){return l()?1:-1},go:function(e){var t=i.item.highlight,a=new Date(t.year,t.month,t.date+e);i.set("highlight",a,{interval:e}),this.render()}},e.on("render",function(){e.$root.find("."+t.klass.selectMonth).on("change",function(){var i=this.value;i&&(e.set("highlight",[e.get("view").year,i,e.get("highlight").date]),e.$root.find("."+t.klass.selectMonth).trigger("focus"))}),e.$root.find("."+t.klass.selectYear).on("change",function(){var i=this.value;i&&(e.set("highlight",[i,e.get("view").month,e.get("highlight").date]),e.$root.find("."+t.klass.selectYear).trigger("focus"))})},1).on("open",function(){var a="";i.disabled(i.get("now"))&&(a=":not(."+t.klass.buttonToday+")"),e.$root.find("button"+a+", select").attr("disabled",!1)},1).on("close",function(){e.$root.find("button, select").attr("disabled",!0)},1)}var a=7,n=6,o=e._;i.prototype.set=function(e,t,i){var a=this,n=a.item;return null===t?("clear"==e&&(e="select"),n[e]=t,a):(n["enable"==e?"disable":"flip"==e?"enable":e]=a.queue[e].split(" ").map(function(n){return t=a[n](e,t,i)}).pop(),"select"==e?a.set("highlight",n.select,i):"highlight"==e?a.set("view",n.highlight,i):e.match(/^(flip|min|max|disable|enable)$/)&&(n.select&&a.disabled(n.select)&&a.set("select",n.select,i),n.highlight&&a.disabled(n.highlight)&&a.set("highlight",n.highlight,i)),a)},i.prototype.get=function(e){return this.item[e]},i.prototype.create=function(e,i,a){var n,r=this;return i=void 0===i?e:i,i==-(1/0)||i==1/0?n=i:t.isPlainObject(i)&&o.isInteger(i.pick)?i=i.obj:t.isArray(i)?(i=new Date(i[0],i[1],i[2]),i=o.isDate(i)?i:r.create().obj):i=o.isInteger(i)||o.isDate(i)?r.normalize(new Date(i),a):r.now(e,i,a),{year:n||i.getFullYear(),month:n||i.getMonth(),date:n||i.getDate(),day:n||i.getDay(),obj:n||i,pick:n||i.getTime()}},i.prototype.createRange=function(e,i){var a=this,n=function(e){return e===!0||t.isArray(e)||o.isDate(e)?a.create(e):e};return o.isInteger(e)||(e=n(e)),o.isInteger(i)||(i=n(i)),o.isInteger(e)&&t.isPlainObject(i)?e=[i.year,i.month,i.date+e]:o.isInteger(i)&&t.isPlainObject(e)&&(i=[e.year,e.month,e.date+i]),{from:n(e),to:n(i)}},i.prototype.withinRange=function(e,t){return e=this.createRange(e.from,e.to),t.pick>=e.from.pick&&t.pick<=e.to.pick},i.prototype.overlapRanges=function(e,t){var i=this;return e=i.createRange(e.from,e.to),t=i.createRange(t.from,t.to),i.withinRange(e,t.from)||i.withinRange(e,t.to)||i.withinRange(t,e.from)||i.withinRange(t,e.to)},i.prototype.now=function(e,t,i){return t=new Date,i&&i.rel&&t.setDate(t.getDate()+i.rel),this.normalize(t,i)},i.prototype.navigate=function(e,i,a){var n,o,r,s,l=t.isArray(i),u=t.isPlainObject(i),c=this.item.view;if(l||u){for(u?(o=i.year,r=i.month,s=i.date):(o=+i[0],r=+i[1],s=+i[2]),a&&a.nav&&c&&c.month!==r&&(o=c.year,r=c.month),n=new Date(o,r+(a&&a.nav?a.nav:0),1),o=n.getFullYear(),r=n.getMonth();new Date(o,r,s).getMonth()!==r;)s-=1;i=[o,r,s]}return i},i.prototype.normalize=function(e){return e.setHours(0,0,0,0),e},i.prototype.measure=function(e,t){var i=this;return t?"string"==typeof t?t=i.parse(e,t):o.isInteger(t)&&(t=i.now(e,t,{rel:t})):t="min"==e?-(1/0):1/0,t},i.prototype.viewset=function(e,t){return this.create([t.year,t.month,1])},i.prototype.validate=function(e,i,a){var n,r,s,l,u=this,c=i,d=a&&a.interval?a.interval:1,p=u.item.enable===-1,h=u.item.min,m=u.item.max,g=p&&u.item.disable.filter(function(e){if(t.isArray(e)){var a=u.create(e).pick;a<i.pick?n=!0:a>i.pick&&(r=!0)}return o.isInteger(e)}).length;if((!a||!a.nav)&&(!p&&u.disabled(i)||p&&u.disabled(i)&&(g||n||r)||!p&&(i.pick<=h.pick||i.pick>=m.pick)))for(p&&!g&&(!r&&d>0||!n&&d<0)&&(d*=-1);u.disabled(i)&&(Math.abs(d)>1&&(i.month<c.month||i.month>c.month)&&(i=c,d=d>0?1:-1),i.pick<=h.pick?(s=!0,d=1,i=u.create([h.year,h.month,h.date+(i.pick===h.pick?0:-1)])):i.pick>=m.pick&&(l=!0,d=-1,i=u.create([m.year,m.month,m.date+(i.pick===m.pick?0:1)])),!s||!l);)i=u.create([i.year,i.month,i.date+d]);return i},i.prototype.disabled=function(e){var i=this,a=i.item.disable.filter(function(a){return o.isInteger(a)?e.day===(i.settings.firstDay?a:a-1)%7:t.isArray(a)||o.isDate(a)?e.pick===i.create(a).pick:t.isPlainObject(a)?i.withinRange(a,e):void 0});return a=a.length&&!a.filter(function(e){return t.isArray(e)&&"inverted"==e[3]||t.isPlainObject(e)&&e.inverted}).length,i.item.enable===-1?!a:a||e.pick<i.item.min.pick||e.pick>i.item.max.pick},i.prototype.parse=function(e,t,i){var a=this,n={};return t&&"string"==typeof t?(i&&i.format||(i=i||{},i.format=a.settings.format),a.formats.toArray(i.format).map(function(e){var i=a.formats[e],r=i?o.trigger(i,a,[t,n]):e.replace(/^!/,"").length;i&&(n[e]=t.substr(0,r)),t=t.substr(r)}),[n.yyyy||n.yy,+(n.mm||n.m)-1,n.dd||n.d]):t},i.prototype.formats=function(){function e(e,t,i){var a=e.match(/\w+/)[0];return i.mm||i.m||(i.m=t.indexOf(a)+1),a.length}function t(e){return e.match(/\w+/)[0].length}return{d:function(e,t){return e?o.digits(e):t.date},dd:function(e,t){return e?2:o.lead(t.date)},ddd:function(e,i){return e?t(e):this.settings.weekdaysShort[i.day]},dddd:function(e,i){return e?t(e):this.settings.weekdaysFull[i.day]},m:function(e,t){return e?o.digits(e):t.month+1},mm:function(e,t){return e?2:o.lead(t.month+1)},mmm:function(t,i){var a=this.settings.monthsShort;return t?e(t,a,i):a[i.month]},mmmm:function(t,i){var a=this.settings.monthsFull;return t?e(t,a,i):a[i.month]},yy:function(e,t){return e?2:(""+t.year).slice(2)},yyyy:function(e,t){return e?4:t.year},toArray:function(e){return e.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)},toString:function(e,t){var i=this;return i.formats.toArray(e).map(function(e){return o.trigger(i.formats[e],i,[0,t])||e.replace(/^!/,"")}).join("")}}}(),i.prototype.isDateExact=function(e,i){var a=this;return o.isInteger(e)&&o.isInteger(i)||"boolean"==typeof e&&"boolean"==typeof i?e===i:(o.isDate(e)||t.isArray(e))&&(o.isDate(i)||t.isArray(i))?a.create(e).pick===a.create(i).pick:!(!t.isPlainObject(e)||!t.isPlainObject(i))&&(a.isDateExact(e.from,i.from)&&a.isDateExact(e.to,i.to))},i.prototype.isDateOverlap=function(e,i){var a=this,n=a.settings.firstDay?1:0;return o.isInteger(e)&&(o.isDate(i)||t.isArray(i))?(e=e%7+n,e===a.create(i).day+1):o.isInteger(i)&&(o.isDate(e)||t.isArray(e))?(i=i%7+n,i===a.create(e).day+1):!(!t.isPlainObject(e)||!t.isPlainObject(i))&&a.overlapRanges(e,i)},i.prototype.flipEnable=function(e){var t=this.item;t.enable=e||(t.enable==-1?1:-1)},i.prototype.deactivate=function(e,i){var a=this,n=a.item.disable.slice(0);return"flip"==i?a.flipEnable():i===!1?(a.flipEnable(1),n=[]):i===!0?(a.flipEnable(-1),n=[]):i.map(function(e){for(var i,r=0;r<n.length;r+=1)if(a.isDateExact(e,n[r])){i=!0;break}i||(o.isInteger(e)||o.isDate(e)||t.isArray(e)||t.isPlainObject(e)&&e.from&&e.to)&&n.push(e)}),n},i.prototype.activate=function(e,i){var a=this,n=a.item.disable,r=n.length;return"flip"==i?a.flipEnable():i===!0?(a.flipEnable(1),n=[]):i===!1?(a.flipEnable(-1),n=[]):i.map(function(e){var i,s,l,u;for(l=0;l<r;l+=1){if(s=n[l],a.isDateExact(s,e)){i=n[l]=null,u=!0;break}if(a.isDateOverlap(s,e)){t.isPlainObject(e)?(e.inverted=!0,i=e):t.isArray(e)?(i=e,i[3]||i.push("inverted")):o.isDate(e)&&(i=[e.getFullYear(),e.getMonth(),e.getDate(),"inverted"]);break}}if(i)for(l=0;l<r;l+=1)if(a.isDateExact(n[l],e)){n[l]=null;break}if(u)for(l=0;l<r;l+=1)if(a.isDateOverlap(n[l],e)){n[l]=null;break}i&&n.push(i)}),n.filter(function(e){return null!=e})},i.prototype.nodes=function(e){var t=this,i=t.settings,r=t.item,s=r.now,l=r.select,u=r.highlight,c=r.view,d=r.disable,p=r.min,h=r.max,m=function(e,t){return i.firstDay&&(e.push(e.shift()),t.push(t.shift())),o.node("thead",o.node("tr",o.group({min:0,max:a-1,i:1,node:"th",item:function(a){return[e[a],i.klass.weekdays,'scope=col title="'+t[a]+'"']}})))}((i.showWeekdaysFull?i.weekdaysFull:i.weekdaysLetter).slice(0),i.weekdaysFull.slice(0)),g=function(e){return o.node("div"," ",i.klass["nav"+(e?"Next":"Prev")]+(e&&c.year>=h.year&&c.month>=h.month||!e&&c.year<=p.year&&c.month<=p.month?" "+i.klass.navDisabled:""),"data-nav="+(e||-1)+" "+o.ariaAttr({role:"button",controls:t.$node[0].id+"_table"})+' title="'+(e?i.labelMonthNext:i.labelMonthPrev)+'"')},f=function(a){var n=i.showMonthsShort?i.monthsShort:i.monthsFull;return"short_months"==a&&(n=i.monthsShort),i.selectMonths&&void 0==a?o.node("select",o.group({min:0,max:11,i:1,node:"option",item:function(e){return[n[e],0,"value="+e+(c.month==e?" selected":"")+(c.year==p.year&&e<p.month||c.year==h.year&&e>h.month?" disabled":"")]}}),i.klass.selectMonth+" browser-default",(e?"":"disabled")+" "+o.ariaAttr({controls:t.$node[0].id+"_table"})+' title="'+i.labelMonthSelect+'"'):"short_months"==a?null!=l?o.node("div",n[l.month]):o.node("div",n[c.month]):o.node("div",n[c.month],i.klass.month)},b=function(a){var n=c.year,r=i.selectYears===!0?5:~~(i.selectYears/2);if(r){var s=p.year,l=h.year,u=n-r,d=n+r;if(s>u&&(d+=s-u,u=s),l<d){var m=u-s,g=d-l;u-=m>g?g:m,d=l}if(i.selectYears&&void 0==a)return o.node("select",o.group({min:u,max:d,i:1,node:"option",item:function(e){return[e,0,"value="+e+(n==e?" selected":"")]}}),i.klass.selectYear+" browser-default",(e?"":"disabled")+" "+o.ariaAttr({controls:t.$node[0].id+"_table"})+' title="'+i.labelYearSelect+'"')}return"raw"==a?o.node("div",n):o.node("div",n,i.klass.year)};return createDayLabel=function(){return null!=l?o.node("div",l.date):o.node("div",s.date)},createWeekdayLabel=function(){var e;e=null!=l?l.day:s.day;var t=i.weekdaysFull[e];return t},o.node("div",o.node("div",createWeekdayLabel(),"picker__weekday-display")+o.node("div",f("short_months"),i.klass.month_display)+o.node("div",createDayLabel(),i.klass.day_display)+o.node("div",b("raw"),i.klass.year_display),i.klass.date_display)+o.node("div",o.node("div",(i.selectYears?f()+b():f()+b())+g()+g(1),i.klass.header)+o.node("table",m+o.node("tbody",o.group({min:0,max:n-1,i:1,node:"tr",item:function(e){var n=i.firstDay&&0===t.create([c.year,c.month,1]).day?-7:0;return[o.group({min:a*e-c.day+n+1,max:function(){return this.min+a-1},i:1,node:"td",item:function(e){e=t.create([c.year,c.month,e+(i.firstDay?1:0)]);var a=l&&l.pick==e.pick,n=u&&u.pick==e.pick,r=d&&t.disabled(e)||e.pick<p.pick||e.pick>h.pick,m=o.trigger(t.formats.toString,t,[i.format,e]);return[o.node("div",e.date,function(t){return t.push(c.month==e.month?i.klass.infocus:i.klass.outfocus),s.pick==e.pick&&t.push(i.klass.now),a&&t.push(i.klass.selected),n&&t.push(i.klass.highlighted),r&&t.push(i.klass.disabled),t.join(" ")}([i.klass.day]),"data-pick="+e.pick+" "+o.ariaAttr({role:"gridcell",label:m,selected:!(!a||t.$node.val()!==m)||null,activedescendant:!!n||null,disabled:!!r||null})),"",o.ariaAttr({role:"presentation"})]}})]}})),i.klass.table,'id="'+t.$node[0].id+'_table" '+o.ariaAttr({role:"grid",controls:t.$node[0].id,readonly:!0})),i.klass.calendar_container)+o.node("div",o.node("button",i.today,"btn-flat picker__today","type=button data-pick="+s.pick+(e&&!t.disabled(s)?"":" disabled")+" "+o.ariaAttr({controls:t.$node[0].id}))+o.node("button",i.clear,"btn-flat picker__clear","type=button data-clear=1"+(e?"":" disabled")+" "+o.ariaAttr({controls:t.$node[0].id}))+o.node("button",i.close,"btn-flat picker__close","type=button data-close=true "+(e?"":" disabled")+" "+o.ariaAttr({controls:t.$node[0].id})),i.klass.footer)},i.defaults=function(e){return{labelMonthNext:"Next month",labelMonthPrev:"Previous month",labelMonthSelect:"Select a month",labelYearSelect:"Select a year",monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdaysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekdaysLetter:["S","M","T","W","T","F","S"],today:"Today",clear:"Clear",close:"Close",format:"d mmmm, yyyy",klass:{table:e+"table",header:e+"header",date_display:e+"date-display",day_display:e+"day-display",month_display:e+"month-display",year_display:e+"year-display",calendar_container:e+"calendar-container",navPrev:e+"nav--prev",navNext:e+"nav--next",navDisabled:e+"nav--disabled",month:e+"month",year:e+"year",selectMonth:e+"select--month",selectYear:e+"select--year",weekdays:e+"weekday",day:e+"day",disabled:e+"day--disabled",selected:e+"day--selected",highlighted:e+"day--highlighted",now:e+"day--today",infocus:e+"day--infocus",outfocus:e+"day--outfocus",footer:e+"footer",buttonClear:e+"button--clear",buttonToday:e+"button--today",buttonClose:e+"button--close"}}}(e.klasses().picker+"__"),e.extend("pickadate",i)});