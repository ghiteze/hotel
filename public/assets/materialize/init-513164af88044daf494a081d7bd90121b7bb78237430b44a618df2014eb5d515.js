!function(e){e(function(){function t(e){function t(e){return("0"+parseInt(e).toString(16)).slice(-2)}return/^#[0-9A-F]{6}$/i.test(e)?e:(e=e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/),null===e?"N/A":"#"+t(e[1])+t(e[2])+t(e[3]))}function i(){if(!o.find("#carbonads").length)if(r-=1,r>=0)setTimeout(i,500);else{var t=e('<div id="carbonads"><span><a class="carbon-text" href="#!" onclick="document.getElementById(\'paypal-donate\').submit();"><img src="images/donate.png" /> Help support us by turning off adblock. If you still prefer to keep adblock on for this page but still want to support us, feel free to donate. Any little bit helps.</a></form></span></div>');o.append(t)}}function a(){try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}}var n=e(window).width();e(".dynamic-color .col").each(function(){e(this).children().each(function(){var i=e(this).css("background-color"),a=e(this).attr("class");e(this).html(t(i)+" "+a),(a.indexOf("darken")>=0||e(this).hasClass("black"))&&e(this).css("color","rgba(255,255,255,.9")})}),setTimeout(function(){var t=260,i=e(".toc-wrapper .table-of-contents").length?e(".toc-wrapper .table-of-contents").height():0,a=95,n=e("body > footer").first().length?e("body > footer").first().offset().top:0,o=n-a-i-t;e("nav").length?e(".toc-wrapper").pushpin({top:e("nav").height(),bottom:o}):e("#index-banner").length?e(".toc-wrapper").pushpin({top:e("#index-banner").height(),bottom:o}):e(".toc-wrapper").pushpin({top:0,bottom:o})},100);var o=e(".buysellads"),r=3;i(),e(".github-commit").length&&e.ajax({url:"https://api.github.com/repos/dogfalo/materialize/commits/master",dataType:"json",success:function(t){var i=t.sha,a=jQuery.timeago(t.commit.author.date);n<1120&&(i=i.substring(0,7)),e(".github-commit").find(".date").html(a),e(".github-commit").find(".sha").html(i).attr("href",t.html_url)}});var s=e("#flow-toggle");s.click(function(){e("#flow-text-demo").children("p").each(function(){e(this).toggleClass("flow-text")})});var l=e("#container-toggle-button");l.click(function(){e("body .browser-window .container, .had-container").each(function(){e(this).toggleClass("had-container"),e(this).toggleClass("container"),e(this).hasClass("container")?l.text("Turn off Containers"):l.text("Turn on Containers")})}),a()&&e("#nav-mobile").css({overflow:"auto"});var u=document.getElementById("indeterminate-checkbox");null!==u&&(u.indeterminate=!0),e(".carousel.carousel-slider").carousel({full_width:!0}),e(".carousel").carousel(),e(".slider").slider({full_width:!0}),e(".parallax").parallax(),e(".modal-trigger").leanModal(),e(".scrollspy").scrollSpy(),e(".button-collapse").sideNav({edge:"left"}),e(".datepicker").pickadate({selectYears:20}),e("select").not(".disabled").material_select(),e("input.autocomplete").autocomplete({data:{Apple:null,Microsoft:null,Google:"http://placehold.it/250x250"}}),e(".chips-initial").material_chip({readOnly:!0,data:[{tag:"Apple"},{tag:"Microsoft"},{tag:"Google"}]}),e(".chips-placeholder").material_chip({placeholder:"Enter a tag",secondaryPlaceholder:"+Tag"}),e(".chips").material_chip()})}(jQuery);