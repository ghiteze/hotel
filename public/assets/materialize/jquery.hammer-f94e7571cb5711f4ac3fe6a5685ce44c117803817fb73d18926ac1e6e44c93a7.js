!function(e){"function"==typeof define&&define.amd?define(["jquery","hammerjs"],e):"object"==typeof exports?e(require("jquery"),require("hammerjs")):e(jQuery,Hammer)}(function(e,t){function i(i,a){var n=e(i);n.data("hammer")||n.data("hammer",new t(n[0],a))}e.fn.hammer=function(e){return this.each(function(){i(this,e)})},t.Manager.prototype.emit=function(t){return function(i,a){t.call(this,i,a),e(this.element).trigger({type:i,gesture:a})}}(t.Manager.prototype.emit)});