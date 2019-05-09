/*! iptools-jquery-offcanvas - v1.0.0 - 2017-05-08
* https://github.com/interactive-pioneers/iptools-jquery-offcanvas
* Copyright © 2017 Interactive Pioneers GmbH; Licensed GPL-3.0 */

!function(a,b,c){"use strict";function d(b,c){this.settings=a.extend({},r,c),this.$element=a(b),this.id=this.$element.attr("id"),this.$open=a("[data-"+p.open+'="'+this.id+'"]'),this.$close=a("[data-"+p.close+'="'+this.id+'"]'),this.$toggle=a("[data-"+p.toggle+'="'+this.id+'"]'),this.$element.addClass(this.settings.baseClass+s[this.settings.type].baseClass),n(this),e(this),this.$element.trigger(m("initialized",this.id))}function e(a){a.settings.static&&a.toggle(!0),a.$element.addClass(a.settings.baseClass+t.initialized)}function f(a){a.data.toggle(!0),a.stopPropagation()}function g(a){a.data.toggle(!1),a.stopPropagation()}function h(a){a.data.toggle(),a.stopPropagation()}function i(b){b.settings.closeOnClickOutside&&!b.settings.static&&a(c).on(m("click",b.id),null,b,k).on(m("touchstart",b.id),null,b,k)}function j(b){a(c).off(m("click",b.id)).off(m("touchstart",b.id))}function k(a){var b=a.data;b.$element.is(a.target)||0!==b.$element.has(a.target).length||b.toggle(!1)}function l(a,b){return"."+a+b}function m(a,b){return void 0===b?a+"."+o:a+"."+b+"@"+o}function n(a){a.$open.on(m("click",a.id),null,a,f).on(m("touchstart",a.id),null,a,f),a.$close.on(m("click",a.id),null,a,g).on(m("touchstart",a.id),null,a,g),a.$toggle.on(m("click",a.id),null,a,h).on(m("touchstart",a.id),null,a,h)}var o="iptOffCanvas",p={open:"offcanvas-open",close:"offcanvas-close",toggle:"offcanvas-toggle"},q=function(){return!0},r={baseClass:"offcanvas",closeOnClickOutside:!1,single:!0,static:!1,staticCloseCondition:q,type:"right"},s={top:{baseClass:"--top",activeClass:"--top--active"},right:{baseClass:"--right",activeClass:"--right--active"},bottom:{baseClass:"--bottom",activeClass:"--bottom--active"},left:{baseClass:"--left",activeClass:"--left--active"}},t={initialized:"--initialized"};d.prototype.getSettings=function(){return this.settings},d.prototype.isActive=function(){return this.$element.hasClass(this.settings.baseClass+s[this.settings.type].activeClass)},d.prototype.toggle=function(b){var c,d,e=this.settings.baseClass+s[this.settings.type].activeClass,f=this;b=void 0===b?!this.isActive():b,this.settings.single&&b&&a(l(this.settings.baseClass,t.initialized)).each(function(){c=a(this).data("plugin_"+o),d=c.getSettings(),f.$element!==c.$element&&c.isActive()&&(!d.static||d.static&&d.staticCloseCondition())&&c.toggle(!1)});var g="";b&&!this.isActive()?(g="opened",i(this)):!b&&this.isActive()&&(g="closed",j(this)),""!==g&&this.$element.trigger(m(g,this.id)),this.$element.toggleClass(e,b)},d.prototype.destroy=function(){this.$open.off("."+o),this.$close.off("."+o),this.$toggle.off("."+o),this.$element.removeClass(this.settings.baseClass+t.initialized).removeClass(this.settings.baseClass+s[this.settings.type].activeClass).removeData("plugin_"+o)},a.fn[o]=function(b){return this.each(function(){a.data(this,"plugin_"+o)||a.data(this,"plugin_"+o,new d(this,b))})}}(jQuery,window,document);