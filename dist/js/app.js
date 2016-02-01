// Avoid `console` errors in browsers that lack a console
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/*
 * SlickNav Responsive Mobile Menu v1.0.4
 * (c) 2015 Josh Cope
 * licensed under MIT
 */
!function (e, n) { function t(n, t) { this.element = n, this.settings = e.extend({}, a, t), this._defaults = a, this._name = i, this.init() } var a = { label: "MENU", duplicate: !0, duration: 200, easingOpen: "swing", easingClose: "swing", closedSymbol: "&#9658;", openedSymbol: "&#9660;", prependTo: "body", appendTo: "", parentTag: "a", closeOnClick: !1, allowParentLinks: !1, nestedParentLinks: !0, showChildren: !1, removeIds: !1, removeClasses: !1, brand: "", init: function () { }, beforeOpen: function () { }, beforeClose: function () { }, afterOpen: function () { }, afterClose: function () { } }, i = "slicknav", s = "slicknav"; t.prototype.init = function () { var t, a, i = this, l = e(this.element), o = this.settings; if (o.duplicate ? (i.mobileNav = l.clone(), i.mobileNav.removeAttr("id"), i.mobileNav.find("*").each(function (n, t) { e(t).removeAttr("id") })) : (i.mobileNav = l, i.mobileNav.removeAttr("id"), i.mobileNav.find("*").each(function (n, t) { e(t).removeAttr("id") })), o.removeClasses && (i.mobileNav.removeAttr("class"), i.mobileNav.find("*").each(function (n, t) { e(t).removeAttr("class") })), t = s + "_icon", "" === o.label && (t += " " + s + "_no-text"), "a" == o.parentTag && (o.parentTag = 'a href="#"'), i.mobileNav.attr("class", s + "_nav"), a = e('<div class="' + s + '_menu"></div>'), "" !== o.brand) { var r = e('<div class="' + s + '_brand">' + o.brand + "</div>"); e(a).append(r) } i.btn = e(["<" + o.parentTag + ' aria-haspopup="true" tabindex="0" class="' + s + "_btn " + s + '_collapsed">', '<span class="' + s + '_menutxt">' + o.label + "</span>", '<span class="' + t + '">', '<span class="' + s + '_icon-bar"></span>', '<span class="' + s + '_icon-bar"></span>', '<span class="' + s + '_icon-bar"></span>', "</span>", "</" + o.parentTag + ">"].join("")), e(a).append(i.btn), "" !== o.appendTo ? e(o.appendTo).append(a) : e(o.prependTo).prepend(a), a.append(i.mobileNav); var d = i.mobileNav.find("li"); e(d).each(function () { var n = e(this), t = {}; if (t.children = n.children("ul").attr("role", "menu"), n.data("menu", t), t.children.length > 0) { var a = n.contents(), l = !1, r = []; e(a).each(function () { return e(this).is("ul") ? !1 : (r.push(this), void (e(this).is("a") && (l = !0))) }); var d = e("<" + o.parentTag + ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' + s + '_item"/>'); if (o.allowParentLinks && !o.nestedParentLinks && l) e(r).wrapAll('<span class="' + s + "_parent-link " + s + '_row"/>').parent(); else { var p = e(r).wrapAll(d).parent(); p.addClass(s + "_row") } n.addClass(o.showChildren ? s + "_open" : s + "_collapsed"), n.addClass(s + "_parent"); var c = e('<span class="' + s + '_arrow">' + (o.showChildren ? o.openedSymbol : o.closedSymbol) + "</span>"); o.allowParentLinks && !o.nestedParentLinks && l && (c = c.wrap(d).parent()), e(r).last().after(c) } else 0 === n.children().length && n.addClass(s + "_txtnode"); n.children("a").attr("role", "menuitem").click(function (n) { o.closeOnClick && !e(n.target).parent().closest("li").hasClass(s + "_parent") && e(i.btn).click() }), o.closeOnClick && o.allowParentLinks && (n.children("a").children("a").click(function () { e(i.btn).click() }), n.find("." + s + "_parent-link a:not(." + s + "_item)").click(function () { e(i.btn).click() })) }), e(d).each(function () { var n = e(this).data("menu"); o.showChildren || i._visibilityToggle(n.children, null, !1, null, !0) }), i._visibilityToggle(i.mobileNav, null, !1, "init", !0), i.mobileNav.attr("role", "menu"), e(n).mousedown(function () { i._outlines(!1) }), e(n).keyup(function () { i._outlines(!0) }), e(i.btn).click(function (e) { e.preventDefault(), i._menuToggle() }), i.mobileNav.on("click", "." + s + "_item", function (n) { n.preventDefault(), i._itemClick(e(this)) }), e(i.btn).keydown(function (e) { var n = e || event; 13 == n.keyCode && (e.preventDefault(), i._menuToggle()) }), i.mobileNav.on("keydown", "." + s + "_item", function (n) { var t = n || event; 13 == t.keyCode && (n.preventDefault(), i._itemClick(e(n.target))) }), o.allowParentLinks && o.nestedParentLinks && e("." + s + "_item a").click(function (e) { e.stopImmediatePropagation() }) }, t.prototype._menuToggle = function () { var e = this, n = e.btn, t = e.mobileNav; n.hasClass(s + "_collapsed") ? (n.removeClass(s + "_collapsed"), n.addClass(s + "_open")) : (n.removeClass(s + "_open"), n.addClass(s + "_collapsed")), n.addClass(s + "_animating"), e._visibilityToggle(t, n.parent(), !0, n) }, t.prototype._itemClick = function (e) { var n = this, t = n.settings, a = e.data("menu"); a || (a = {}, a.arrow = e.children("." + s + "_arrow"), a.ul = e.next("ul"), a.parent = e.parent(), a.parent.hasClass(s + "_parent-link") && (a.parent = e.parent().parent(), a.ul = e.parent().next("ul")), e.data("menu", a)), a.parent.hasClass(s + "_collapsed") ? (a.arrow.html(t.openedSymbol), a.parent.removeClass(s + "_collapsed"), a.parent.addClass(s + "_open"), a.parent.addClass(s + "_animating"), n._visibilityToggle(a.ul, a.parent, !0, e)) : (a.arrow.html(t.closedSymbol), a.parent.addClass(s + "_collapsed"), a.parent.removeClass(s + "_open"), a.parent.addClass(s + "_animating"), n._visibilityToggle(a.ul, a.parent, !0, e)) }, t.prototype._visibilityToggle = function (n, t, a, i, l) { var o = this, r = o.settings, d = o._getActionItems(n), p = 0; a && (p = r.duration), n.hasClass(s + "_hidden") ? (n.removeClass(s + "_hidden"), l || r.beforeOpen(i), n.slideDown(p, r.easingOpen, function () { e(i).removeClass(s + "_animating"), e(t).removeClass(s + "_animating"), l || r.afterOpen(i) }), n.attr("aria-hidden", "false"), d.attr("tabindex", "0"), o._setVisAttr(n, !1)) : (n.addClass(s + "_hidden"), l || r.beforeClose(i), n.slideUp(p, this.settings.easingClose, function () { n.attr("aria-hidden", "true"), d.attr("tabindex", "-1"), o._setVisAttr(n, !0), n.hide(), e(i).removeClass(s + "_animating"), e(t).removeClass(s + "_animating"), l ? "init" == i && r.init() : r.afterClose(i) })) }, t.prototype._setVisAttr = function (n, t) { var a = this, i = n.children("li").children("ul").not("." + s + "_hidden"); i.each(t ? function () { var n = e(this); n.attr("aria-hidden", "true"); var i = a._getActionItems(n); i.attr("tabindex", "-1"), a._setVisAttr(n, t) } : function () { var n = e(this); n.attr("aria-hidden", "false"); var i = a._getActionItems(n); i.attr("tabindex", "0"), a._setVisAttr(n, t) }) }, t.prototype._getActionItems = function (e) { var n = e.data("menu"); if (!n) { n = {}; var t = e.children("li"), a = t.find("a"); n.links = a.add(t.find("." + s + "_item")), e.data("menu", n) } return n.links }, t.prototype._outlines = function (n) { n ? e("." + s + "_item, ." + s + "_btn").css("outline", "") : e("." + s + "_item, ." + s + "_btn").css("outline", "none") }, t.prototype.toggle = function () { var e = this; e._menuToggle() }, t.prototype.open = function () { var e = this; e.btn.hasClass(s + "_collapsed") && e._menuToggle() }, t.prototype.close = function () { var e = this; e.btn.hasClass(s + "_open") && e._menuToggle() }, e.fn[i] = function (n) { var a = arguments; if (void 0 === n || "object" == typeof n) return this.each(function () { e.data(this, "plugin_" + i) || e.data(this, "plugin_" + i, new t(this, n)) }); if ("string" == typeof n && "_" !== n[0] && "init" !== n) { var s; return this.each(function () { var l = e.data(this, "plugin_" + i); l instanceof t && "function" == typeof l[n] && (s = l[n].apply(l, Array.prototype.slice.call(a, 1))) }), void 0 !== s ? s : this } } }(jQuery, document, window);

/**
* jquery.matchHeight-min.js master
* http://brm.io/jquery-match-height/
* License: MIT
*/
(function (c) {
    var n = -1, f = -1, g = function (a) { return parseFloat(a) || 0 }, r = function (a) { var b = null, d = []; c(a).each(function () { var a = c(this), k = a.offset().top - g(a.css("margin-top")), l = 0 < d.length ? d[d.length - 1] : null; null === l ? d.push(a) : 1 >= Math.floor(Math.abs(b - k)) ? d[d.length - 1] = l.add(a) : d.push(a); b = k }); return d }, p = function (a) { var b = { byRow: !0, property: "height", target: null, remove: !1 }; if ("object" === typeof a) return c.extend(b, a); "boolean" === typeof a ? b.byRow = a : "remove" === a && (b.remove = !0); return b }, b = c.fn.matchHeight =
    function (a) { a = p(a); if (a.remove) { var e = this; this.css(a.property, ""); c.each(b._groups, function (a, b) { b.elements = b.elements.not(e) }); return this } if (1 >= this.length && !a.target) return this; b._groups.push({ elements: this, options: a }); b._apply(this, a); return this }; b._groups = []; b._throttle = 80; b._maintainScroll = !1; b._beforeUpdate = null; b._afterUpdate = null; b._apply = function (a, e) {
        var d = p(e), h = c(a), k = [h], l = c(window).scrollTop(), f = c("html").outerHeight(!0), m = h.parents().filter(":hidden"); m.each(function () {
            var a = c(this);
            a.data("style-cache", a.attr("style"))
        }); m.css("display", "block"); d.byRow && !d.target && (h.each(function () { var a = c(this), b = a.css("display"); "inline-block" !== b && "inline-flex" !== b && (b = "block"); a.data("style-cache", a.attr("style")); a.css({ display: b, "padding-top": "0", "padding-bottom": "0", "margin-top": "0", "margin-bottom": "0", "border-top-width": "0", "border-bottom-width": "0", height: "100px" }) }), k = r(h), h.each(function () { var a = c(this); a.attr("style", a.data("style-cache") || "") })); c.each(k, function (a, b) {
            var e = c(b),
            f = 0; if (d.target) f = d.target.outerHeight(!1); else { if (d.byRow && 1 >= e.length) { e.css(d.property, ""); return } e.each(function () { var a = c(this), b = a.css("display"); "inline-block" !== b && "inline-flex" !== b && (b = "block"); b = { display: b }; b[d.property] = ""; a.css(b); a.outerHeight(!1) > f && (f = a.outerHeight(!1)); a.css("display", "") }) } e.each(function () {
                var a = c(this), b = 0; d.target && a.is(d.target) || ("border-box" !== a.css("box-sizing") && (b += g(a.css("border-top-width")) + g(a.css("border-bottom-width")), b += g(a.css("padding-top")) + g(a.css("padding-bottom"))),
                a.css(d.property, f - b + "px"))
            })
        }); m.each(function () { var a = c(this); a.attr("style", a.data("style-cache") || null) }); b._maintainScroll && c(window).scrollTop(l / f * c("html").outerHeight(!0)); return this
    }; b._applyDataApi = function () { var a = {}; c("[data-match-height], [data-mh]").each(function () { var b = c(this), d = b.attr("data-mh") || b.attr("data-match-height"); a[d] = d in a ? a[d].add(b) : b }); c.each(a, function () { this.matchHeight(!0) }) }; var q = function (a) {
        b._beforeUpdate && b._beforeUpdate(a, b._groups); c.each(b._groups, function () {
            b._apply(this.elements,
            this.options)
        }); b._afterUpdate && b._afterUpdate(a, b._groups)
    }; b._update = function (a, e) { if (e && "resize" === e.type) { var d = c(window).width(); if (d === n) return; n = d } a ? -1 === f && (f = setTimeout(function () { q(e); f = -1 }, b._throttle)) : q(e) }; c(b._applyDataApi); c(window).bind("load", function (a) { b._update(!1, a) }); c(window).bind("resize orientationchange", function (a) { b._update(!0, a) })
})(jQuery);


/*
 * jquery.lightbox.js v1.2
 * https://github.com/duncanmcdougall/Responsive-Lightbox
 * Copyright 2015 Duncan McDougall and other contributors; @license Creative Commons Attribution 2.5
 *
 * Options: 
 * margin - int - default 50. Minimum margin around the image
 * nav - bool - default true. enable navigation
 * blur - bool - default true. Blur other content when open using css filter
 * minSize - int - default 0. Min window width or height to open lightbox. Below threshold will open image in a new tab.
 *
 */
!function (t) { "use strict"; t.fn.lightbox = function (i) { var e = { margin: 50, nav: !0, blur: !0, minSize: 0 }, n = { items: [], lightbox: null, image: null, current: null, locked: !1, caption: null, init: function (i) { n.items = i, n.selector = "lightbox-" + Math.random().toString().replace(".", ""); var o = "lightbox-" + Math.floor(1e5 * Math.random() + 1); n.lightbox || (t("body").append('<div id="' + o + '" class="lightbox" style="display:none;"><a href="#" class="lightbox__close lightbox__button"></a><a href="#" class="lightbox__nav lightbox__nav--prev lightbox__button"></a><a href="#" class="lightbox__nav lightbox__nav--next lightbox__button"></a><div href="#" class="lightbox__caption"><p></p></div></div>'), n.lightbox = t("#" + o), n.caption = t(".lightbox__caption", n.lightbox)), n.items.length > 1 && e.nav ? t(".lightbox__nav", n.lightbox).show() : t(".lightbox__nav", n.lightbox).hide(), n.bindEvents() }, loadImage: function () { e.blur && t("body").addClass("blurred"), t("img", n.lightbox).remove(), n.lightbox.fadeIn("fast").append('<span class="lightbox__loading"></span>'); var i = t('<img src="' + t(n.current).attr("href") + '" draggable="false">'); t(i).load(function () { t(".lightbox__loading").remove(), n.lightbox.append(i), n.image = t("img", n.lightbox).hide(), n.resizeImage(), n.setCaption() }) }, setCaption: function () { var i = t(n.current).data("caption"); i && i.length > 0 ? (n.caption.fadeIn(), t("p", n.caption).text(i)) : n.caption.hide() }, resizeImage: function () { var i, o, l, a, r; o = t(window).height() - e.margin, l = t(window).outerWidth(!0) - e.margin, n.image.width("").height(""), a = n.image.height(), r = n.image.width(), r > l && (i = l / r, r = l, a = Math.round(a * i)), a > o && (i = o / a, a = o, r = Math.round(r * i)), n.image.width(r).height(a).css({ top: (t(window).height() - n.image.outerHeight()) / 2 + "px", left: (t(window).width() - n.image.outerWidth()) / 2 + "px" }).show(), n.locked = !1 }, getCurrentIndex: function () { return t.inArray(n.current, n.items) }, next: function () { return n.locked ? !1 : (n.locked = !0, void (n.getCurrentIndex() >= n.items.length - 1 ? t(n.items[0]).click() : t(n.items[n.getCurrentIndex() + 1]).click())) }, previous: function () { return n.locked ? !1 : (n.locked = !0, void (n.getCurrentIndex() <= 0 ? t(n.items[n.items.length - 1]).click() : t(n.items[n.getCurrentIndex() - 1]).click())) }, bindEvents: function () { t(n.items).click(function (i) { if (!n.lightbox.is(":visible") && (t(window).width() < e.minSize || t(window).height() < e.minSize)) return void t(this).attr("target", "_blank"); var o = t(this)[0]; i.preventDefault(), n.current = o, n.loadImage(), t(document).on("keydown", function (t) { 27 === t.keyCode && n.close(), 39 === t.keyCode && n.next(), 37 === t.keyCode && n.previous() }) }), n.lightbox.on("click", function (t) { this === t.target && n.close() }), t(n.lightbox).on("click", ".lightbox__nav--prev", function () { return n.previous(), !1 }), t(n.lightbox).on("click", ".lightbox__nav--next", function () { return n.next(), !1 }), t(n.lightbox).on("click", ".lightbox__close", function () { return n.close(), !1 }), t(window).resize(function () { n.image && n.resizeImage() }) }, close: function () { t(document).off("keydown"), t(n.lightbox).fadeOut("fast"), t("body").removeClass("blurred") } }; t.extend(e, i), n.init(this) } }(jQuery);

/*
 * bxSlider v4.2.4
 * Copyright 2013-2015 Steven Wanderski
 * Written while drinking Belgian ales and listening to jazz

 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */

!function (a) { var b = { mode: "horizontal", slideSelector: "", infiniteLoop: !0, hideControlOnEnd: !1, speed: 500, easing: null, slideMargin: 0, startSlide: 0, randomStart: !1, captions: !1, ticker: !1, tickerHover: !1, adaptiveHeight: !1, adaptiveHeightSpeed: 500, video: !1, useCSS: !0, preloadImages: "visible", responsive: !0, slideZIndex: 50, wrapperClass: "bx-wrapper", touchEnabled: !0, swipeThreshold: 50, oneToOneTouch: !0, preventDefaultSwipeX: !0, preventDefaultSwipeY: !1, ariaLive: !0, ariaHidden: !0, keyboardEnabled: !1, pager: !0, pagerType: "full", pagerShortSeparator: " / ", pagerSelector: null, buildPager: null, pagerCustom: null, controls: !0, nextText: "Next", prevText: "Prev", nextSelector: null, prevSelector: null, autoControls: !1, startText: "Start", stopText: "Stop", autoControlsCombine: !1, autoControlsSelector: null, auto: !1, pause: 4e3, autoStart: !0, autoDirection: "next", stopAutoOnClick: !1, autoHover: !1, autoDelay: 0, autoSlideForOnePage: !1, minSlides: 1, maxSlides: 1, moveSlides: 0, slideWidth: 0, shrinkItems: !1, onSliderLoad: function () { return !0 }, onSlideBefore: function () { return !0 }, onSlideAfter: function () { return !0 }, onSlideNext: function () { return !0 }, onSlidePrev: function () { return !0 }, onSliderResize: function () { return !0 } }; a.fn.bxSlider = function (c) { if (0 === this.length) return this; if (this.length > 1) return this.each(function () { a(this).bxSlider(c) }), this; var d = {}, e = this, f = a(window).width(), g = a(window).height(); if (!a(e).data("bxSlider")) { var h = function () { a(e).data("bxSlider") || (d.settings = a.extend({}, b, c), d.settings.slideWidth = parseInt(d.settings.slideWidth), d.children = e.children(d.settings.slideSelector), d.children.length < d.settings.minSlides && (d.settings.minSlides = d.children.length), d.children.length < d.settings.maxSlides && (d.settings.maxSlides = d.children.length), d.settings.randomStart && (d.settings.startSlide = Math.floor(Math.random() * d.children.length)), d.active = { index: d.settings.startSlide }, d.carousel = d.settings.minSlides > 1 || d.settings.maxSlides > 1 ? !0 : !1, d.carousel && (d.settings.preloadImages = "all"), d.minThreshold = d.settings.minSlides * d.settings.slideWidth + (d.settings.minSlides - 1) * d.settings.slideMargin, d.maxThreshold = d.settings.maxSlides * d.settings.slideWidth + (d.settings.maxSlides - 1) * d.settings.slideMargin, d.working = !1, d.controls = {}, d.interval = null, d.animProp = "vertical" === d.settings.mode ? "top" : "left", d.usingCSS = d.settings.useCSS && "fade" !== d.settings.mode && function () { for (var a = document.createElement("div"), b = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"], c = 0; c < b.length; c++) if (void 0 !== a.style[b[c]]) return d.cssPrefix = b[c].replace("Perspective", "").toLowerCase(), d.animProp = "-" + d.cssPrefix + "-transform", !0; return !1 }(), "vertical" === d.settings.mode && (d.settings.maxSlides = d.settings.minSlides), e.data("origStyle", e.attr("style")), e.children(d.settings.slideSelector).each(function () { a(this).data("origStyle", a(this).attr("style")) }), i()) }, i = function () { var b = d.children.eq(d.settings.startSlide); e.wrap('<div class="' + d.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'), d.viewport = e.parent(), d.settings.ariaLive && !d.settings.ticker && d.viewport.attr("aria-live", "polite"), d.loader = a('<div class="bx-loading" />'), d.viewport.prepend(d.loader), e.css({ width: "horizontal" === d.settings.mode ? 1e3 * d.children.length + 215 + "%" : "auto", position: "relative" }), d.usingCSS && d.settings.easing ? e.css("-" + d.cssPrefix + "-transition-timing-function", d.settings.easing) : d.settings.easing || (d.settings.easing = "swing"), d.viewport.css({ width: "100%", overflow: "hidden", position: "relative" }), d.viewport.parent().css({ maxWidth: m() }), d.settings.pager || d.settings.controls || d.viewport.parent().css({ margin: "0 auto 0px" }), d.children.css({ "float": "horizontal" === d.settings.mode ? "left" : "none", listStyle: "none", position: "relative" }), d.children.css("width", n()), "horizontal" === d.settings.mode && d.settings.slideMargin > 0 && d.children.css("marginRight", d.settings.slideMargin), "vertical" === d.settings.mode && d.settings.slideMargin > 0 && d.children.css("marginBottom", d.settings.slideMargin), "fade" === d.settings.mode && (d.children.css({ position: "absolute", zIndex: 0, display: "none" }), d.children.eq(d.settings.startSlide).css({ zIndex: d.settings.slideZIndex, display: "block" })), d.controls.el = a('<div class="bx-controls" />'), d.settings.captions && x(), d.active.last = d.settings.startSlide === p() - 1, d.settings.video && e.fitVids(), ("all" === d.settings.preloadImages || d.settings.ticker) && (b = d.children), d.settings.ticker ? d.settings.pager = !1 : (d.settings.controls && v(), d.settings.auto && d.settings.autoControls && w(), d.settings.pager && u(), (d.settings.controls || d.settings.autoControls || d.settings.pager) && d.viewport.after(d.controls.el)), j(b, k) }, j = function (b, c) { var d = b.find('img:not([src=""]), iframe').length, e = 0; return 0 === d ? void c() : void b.find('img:not([src=""]), iframe').each(function () { a(this).one("load error", function () { ++e === d && c() }).each(function () { this.complete && a(this).load() }) }) }, k = function () { if (d.settings.infiniteLoop && "fade" !== d.settings.mode && !d.settings.ticker) { var b = "vertical" === d.settings.mode ? d.settings.minSlides : d.settings.maxSlides, c = d.children.slice(0, b).clone(!0).addClass("bx-clone"), f = d.children.slice(-b).clone(!0).addClass("bx-clone"); d.settings.ariaHidden && (c.attr("aria-hidden", !0), f.attr("aria-hidden", !0)), e.append(c).prepend(f) } d.loader.remove(), r(), "vertical" === d.settings.mode && (d.settings.adaptiveHeight = !0), d.viewport.height(l()), e.redrawSlider(), d.settings.onSliderLoad.call(e, d.active.index), d.initialized = !0, d.settings.responsive && a(window).bind("resize", R), d.settings.auto && d.settings.autoStart && (p() > 1 || d.settings.autoSlideForOnePage) && H(), d.settings.ticker && I(), d.settings.pager && D(d.settings.startSlide), d.settings.controls && G(), d.settings.touchEnabled && !d.settings.ticker && M(), d.settings.keyboardEnabled && !d.settings.ticker && a(document).keydown(L) }, l = function () { var b = e.outerHeight(), c = null, f = a(); if ("vertical" === d.settings.mode || d.settings.adaptiveHeight) if (d.carousel) { c = 1 === d.settings.moveSlides ? d.active.index : d.active.index * q(), f = d.children.eq(c); for (var g = 1; g <= d.settings.maxSlides - 1; g++) f = c + g >= d.children.length ? f.add(d.children.eq(c + g - d.children.length)) : f.add(d.children.eq(c + g)) } else f = d.children.eq(d.active.index); else f = d.children; return "vertical" === d.settings.mode ? (f.each(function (c) { b += a(this).outerHeight() }), d.settings.slideMargin > 0 && (b += d.settings.slideMargin * (d.settings.minSlides - 1))) : b = Math.max.apply(Math, f.map(function () { return a(this).outerHeight(!1) }).get()), "border-box" === d.viewport.css("box-sizing") ? b += parseFloat(d.viewport.css("padding-top")) + parseFloat(d.viewport.css("padding-bottom")) + parseFloat(d.viewport.css("border-top-width")) + parseFloat(d.viewport.css("border-bottom-width")) : "padding-box" === d.viewport.css("box-sizing") && (b += parseFloat(d.viewport.css("padding-top")) + parseFloat(d.viewport.css("padding-bottom"))), b }, m = function () { var a = "100%"; return d.settings.slideWidth > 0 && (a = "horizontal" === d.settings.mode ? d.settings.maxSlides * d.settings.slideWidth + (d.settings.maxSlides - 1) * d.settings.slideMargin : d.settings.slideWidth), a }, n = function () { var a = d.settings.slideWidth, b = d.viewport.width(); if (0 === d.settings.slideWidth || d.settings.slideWidth > b && !d.carousel || "vertical" === d.settings.mode) a = b; else if (d.settings.maxSlides > 1 && "horizontal" === d.settings.mode) { if (b > d.maxThreshold) return a; b < d.minThreshold ? a = (b - d.settings.slideMargin * (d.settings.minSlides - 1)) / d.settings.minSlides : d.settings.shrinkItems && (a = Math.floor((b + d.settings.slideMargin) / Math.ceil((b + d.settings.slideMargin) / (a + d.settings.slideMargin)) - d.settings.slideMargin)) } return a }, o = function () { var a = 1, b = null; return "horizontal" === d.settings.mode && d.settings.slideWidth > 0 ? d.viewport.width() < d.minThreshold ? a = d.settings.minSlides : d.viewport.width() > d.maxThreshold ? a = d.settings.maxSlides : (b = d.children.first().width() + d.settings.slideMargin, a = Math.floor((d.viewport.width() + d.settings.slideMargin) / b)) : "vertical" === d.settings.mode && (a = d.settings.minSlides), a }, p = function () { var a = 0, b = 0, c = 0; if (d.settings.moveSlides > 0) if (d.settings.infiniteLoop) a = Math.ceil(d.children.length / q()); else for (; b < d.children.length;)++a, b = c + o(), c += d.settings.moveSlides <= o() ? d.settings.moveSlides : o(); else a = Math.ceil(d.children.length / o()); return a }, q = function () { return d.settings.moveSlides > 0 && d.settings.moveSlides <= o() ? d.settings.moveSlides : o() }, r = function () { var a, b, c; d.children.length > d.settings.maxSlides && d.active.last && !d.settings.infiniteLoop ? "horizontal" === d.settings.mode ? (b = d.children.last(), a = b.position(), s(-(a.left - (d.viewport.width() - b.outerWidth())), "reset", 0)) : "vertical" === d.settings.mode && (c = d.children.length - d.settings.minSlides, a = d.children.eq(c).position(), s(-a.top, "reset", 0)) : (a = d.children.eq(d.active.index * q()).position(), d.active.index === p() - 1 && (d.active.last = !0), void 0 !== a && ("horizontal" === d.settings.mode ? s(-a.left, "reset", 0) : "vertical" === d.settings.mode && s(-a.top, "reset", 0))) }, s = function (b, c, f, g) { var h, i; d.usingCSS ? (i = "vertical" === d.settings.mode ? "translate3d(0, " + b + "px, 0)" : "translate3d(" + b + "px, 0, 0)", e.css("-" + d.cssPrefix + "-transition-duration", f / 1e3 + "s"), "slide" === c ? (e.css(d.animProp, i), e.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (b) { a(b.target).is(e) && (e.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), E()) })) : "reset" === c ? e.css(d.animProp, i) : "ticker" === c && (e.css("-" + d.cssPrefix + "-transition-timing-function", "linear"), e.css(d.animProp, i), e.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (b) { a(b.target).is(e) && (e.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), s(g.resetValue, "reset", 0), J()) }))) : (h = {}, h[d.animProp] = b, "slide" === c ? e.animate(h, f, d.settings.easing, function () { E() }) : "reset" === c ? e.css(d.animProp, b) : "ticker" === c && e.animate(h, f, "linear", function () { s(g.resetValue, "reset", 0), J() })) }, t = function () { for (var b = "", c = "", e = p(), f = 0; e > f; f++) c = "", d.settings.buildPager && a.isFunction(d.settings.buildPager) || d.settings.pagerCustom ? (c = d.settings.buildPager(f), d.pagerEl.addClass("bx-custom-pager")) : (c = f + 1, d.pagerEl.addClass("bx-default-pager")), b += '<div class="bx-pager-item"><a href="" data-slide-index="' + f + '" class="bx-pager-link">' + c + "</a></div>"; d.pagerEl.html(b) }, u = function () { d.settings.pagerCustom ? d.pagerEl = a(d.settings.pagerCustom) : (d.pagerEl = a('<div class="bx-pager" />'), d.settings.pagerSelector ? a(d.settings.pagerSelector).html(d.pagerEl) : d.controls.el.addClass("bx-has-pager").append(d.pagerEl), t()), d.pagerEl.on("click touchend", "a", C) }, v = function () { d.controls.next = a('<a class="bx-next" href="">' + d.settings.nextText + "</a>"), d.controls.prev = a('<a class="bx-prev" href="">' + d.settings.prevText + "</a>"), d.controls.next.bind("click touchend", y), d.controls.prev.bind("click touchend", z), d.settings.nextSelector && a(d.settings.nextSelector).append(d.controls.next), d.settings.prevSelector && a(d.settings.prevSelector).append(d.controls.prev), d.settings.nextSelector || d.settings.prevSelector || (d.controls.directionEl = a('<div class="bx-controls-direction" />'), d.controls.directionEl.append(d.controls.prev).append(d.controls.next), d.controls.el.addClass("bx-has-controls-direction").append(d.controls.directionEl)) }, w = function () { d.controls.start = a('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + d.settings.startText + "</a></div>"), d.controls.stop = a('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + d.settings.stopText + "</a></div>"), d.controls.autoEl = a('<div class="bx-controls-auto" />'), d.controls.autoEl.on("click", ".bx-start", A), d.controls.autoEl.on("click", ".bx-stop", B), d.settings.autoControlsCombine ? d.controls.autoEl.append(d.controls.start) : d.controls.autoEl.append(d.controls.start).append(d.controls.stop), d.settings.autoControlsSelector ? a(d.settings.autoControlsSelector).html(d.controls.autoEl) : d.controls.el.addClass("bx-has-controls-auto").append(d.controls.autoEl), F(d.settings.autoStart ? "stop" : "start") }, x = function () { d.children.each(function (b) { var c = a(this).find("img:first").attr("title"); void 0 !== c && ("" + c).length && a(this).append('<div class="bx-caption"><span>' + c + "</span></div>") }) }, y = function (a) { a.preventDefault(), d.controls.el.hasClass("disabled") || (d.settings.auto && d.settings.stopAutoOnClick && e.stopAuto(), e.goToNextSlide()) }, z = function (a) { a.preventDefault(), d.controls.el.hasClass("disabled") || (d.settings.auto && d.settings.stopAutoOnClick && e.stopAuto(), e.goToPrevSlide()) }, A = function (a) { e.startAuto(), a.preventDefault() }, B = function (a) { e.stopAuto(), a.preventDefault() }, C = function (b) { var c, f; b.preventDefault(), d.controls.el.hasClass("disabled") || (d.settings.auto && d.settings.stopAutoOnClick && e.stopAuto(), c = a(b.currentTarget), void 0 !== c.attr("data-slide-index") && (f = parseInt(c.attr("data-slide-index")), f !== d.active.index && e.goToSlide(f))) }, D = function (b) { var c = d.children.length; return "short" === d.settings.pagerType ? (d.settings.maxSlides > 1 && (c = Math.ceil(d.children.length / d.settings.maxSlides)), void d.pagerEl.html(b + 1 + d.settings.pagerShortSeparator + c)) : (d.pagerEl.find("a").removeClass("active"), void d.pagerEl.each(function (c, d) { a(d).find("a").eq(b).addClass("active") })) }, E = function () { if (d.settings.infiniteLoop) { var a = ""; 0 === d.active.index ? a = d.children.eq(0).position() : d.active.index === p() - 1 && d.carousel ? a = d.children.eq((p() - 1) * q()).position() : d.active.index === d.children.length - 1 && (a = d.children.eq(d.children.length - 1).position()), a && ("horizontal" === d.settings.mode ? s(-a.left, "reset", 0) : "vertical" === d.settings.mode && s(-a.top, "reset", 0)) } d.working = !1, d.settings.onSlideAfter.call(e, d.children.eq(d.active.index), d.oldIndex, d.active.index) }, F = function (a) { d.settings.autoControlsCombine ? d.controls.autoEl.html(d.controls[a]) : (d.controls.autoEl.find("a").removeClass("active"), d.controls.autoEl.find("a:not(.bx-" + a + ")").addClass("active")) }, G = function () { 1 === p() ? (d.controls.prev.addClass("disabled"), d.controls.next.addClass("disabled")) : !d.settings.infiniteLoop && d.settings.hideControlOnEnd && (0 === d.active.index ? (d.controls.prev.addClass("disabled"), d.controls.next.removeClass("disabled")) : d.active.index === p() - 1 ? (d.controls.next.addClass("disabled"), d.controls.prev.removeClass("disabled")) : (d.controls.prev.removeClass("disabled"), d.controls.next.removeClass("disabled"))) }, H = function () { if (d.settings.autoDelay > 0) { setTimeout(e.startAuto, d.settings.autoDelay) } else e.startAuto(), a(window).focus(function () { e.startAuto() }).blur(function () { e.stopAuto() }); d.settings.autoHover && e.hover(function () { d.interval && (e.stopAuto(!0), d.autoPaused = !0) }, function () { d.autoPaused && (e.startAuto(!0), d.autoPaused = null) }) }, I = function () { var b, c, f, g, h, i, j, k, l = 0; "next" === d.settings.autoDirection ? e.append(d.children.clone().addClass("bx-clone")) : (e.prepend(d.children.clone().addClass("bx-clone")), b = d.children.first().position(), l = "horizontal" === d.settings.mode ? -b.left : -b.top), s(l, "reset", 0), d.settings.pager = !1, d.settings.controls = !1, d.settings.autoControls = !1, d.settings.tickerHover && (d.usingCSS ? (g = "horizontal" === d.settings.mode ? 4 : 5, d.viewport.hover(function () { c = e.css("-" + d.cssPrefix + "-transform"), f = parseFloat(c.split(",")[g]), s(f, "reset", 0) }, function () { k = 0, d.children.each(function (b) { k += "horizontal" === d.settings.mode ? a(this).outerWidth(!0) : a(this).outerHeight(!0) }), h = d.settings.speed / k, i = "horizontal" === d.settings.mode ? "left" : "top", j = h * (k - Math.abs(parseInt(f))), J(j) })) : d.viewport.hover(function () { e.stop() }, function () { k = 0, d.children.each(function (b) { k += "horizontal" === d.settings.mode ? a(this).outerWidth(!0) : a(this).outerHeight(!0) }), h = d.settings.speed / k, i = "horizontal" === d.settings.mode ? "left" : "top", j = h * (k - Math.abs(parseInt(e.css(i)))), J(j) })), J() }, J = function (a) { var b, c, f, g = a ? a : d.settings.speed, h = { left: 0, top: 0 }, i = { left: 0, top: 0 }; "next" === d.settings.autoDirection ? h = e.find(".bx-clone").first().position() : i = d.children.first().position(), b = "horizontal" === d.settings.mode ? -h.left : -h.top, c = "horizontal" === d.settings.mode ? -i.left : -i.top, f = { resetValue: c }, s(b, "ticker", g, f) }, K = function (b) { var c = a(window), d = { top: c.scrollTop(), left: c.scrollLeft() }, e = b.offset(); return d.right = d.left + c.width(), d.bottom = d.top + c.height(), e.right = e.left + b.outerWidth(), e.bottom = e.top + b.outerHeight(), !(d.right < e.left || d.left > e.right || d.bottom < e.top || d.top > e.bottom) }, L = function (a) { var b = document.activeElement.tagName.toLowerCase(), c = "input|textarea", d = new RegExp(b, ["i"]), f = d.exec(c); if (null == f && K(e)) { if (39 === a.keyCode) return y(a), !1; if (37 === a.keyCode) return z(a), !1 } }, M = function () { d.touch = { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } }, d.viewport.bind("touchstart MSPointerDown pointerdown", N), d.viewport.on("click", ".bxslider a", function (a) { d.viewport.hasClass("click-disabled") && (a.preventDefault(), d.viewport.removeClass("click-disabled")) }) }, N = function (a) { if (d.controls.el.addClass("disabled"), d.working) a.preventDefault(), d.controls.el.removeClass("disabled"); else { d.touch.originalPos = e.position(); var b = a.originalEvent, c = "undefined" != typeof b.changedTouches ? b.changedTouches : [b]; d.touch.start.x = c[0].pageX, d.touch.start.y = c[0].pageY, d.viewport.get(0).setPointerCapture && (d.pointerId = b.pointerId, d.viewport.get(0).setPointerCapture(d.pointerId)), d.viewport.bind("touchmove MSPointerMove pointermove", P), d.viewport.bind("touchend MSPointerUp pointerup", Q), d.viewport.bind("MSPointerCancel pointercancel", O) } }, O = function (a) { s(d.touch.originalPos.left, "reset", 0), d.controls.el.removeClass("disabled"), d.viewport.unbind("MSPointerCancel pointercancel", O), d.viewport.unbind("touchmove MSPointerMove pointermove", P), d.viewport.unbind("touchend MSPointerUp pointerup", Q), d.viewport.get(0).releasePointerCapture && d.viewport.get(0).releasePointerCapture(d.pointerId) }, P = function (a) { var b = a.originalEvent, c = "undefined" != typeof b.changedTouches ? b.changedTouches : [b], e = Math.abs(c[0].pageX - d.touch.start.x), f = Math.abs(c[0].pageY - d.touch.start.y), g = 0, h = 0; 3 * e > f && d.settings.preventDefaultSwipeX ? a.preventDefault() : 3 * f > e && d.settings.preventDefaultSwipeY && a.preventDefault(), "fade" !== d.settings.mode && d.settings.oneToOneTouch && ("horizontal" === d.settings.mode ? (h = c[0].pageX - d.touch.start.x, g = d.touch.originalPos.left + h) : (h = c[0].pageY - d.touch.start.y, g = d.touch.originalPos.top + h), s(g, "reset", 0)) }, Q = function (a) { d.viewport.unbind("touchmove MSPointerMove pointermove", P), d.controls.el.removeClass("disabled"); var b = a.originalEvent, c = "undefined" != typeof b.changedTouches ? b.changedTouches : [b], f = 0, g = 0; d.touch.end.x = c[0].pageX, d.touch.end.y = c[0].pageY, "fade" === d.settings.mode ? (g = Math.abs(d.touch.start.x - d.touch.end.x), g >= d.settings.swipeThreshold && (d.touch.start.x > d.touch.end.x ? e.goToNextSlide() : e.goToPrevSlide(), e.stopAuto())) : ("horizontal" === d.settings.mode ? (g = d.touch.end.x - d.touch.start.x, f = d.touch.originalPos.left) : (g = d.touch.end.y - d.touch.start.y, f = d.touch.originalPos.top), !d.settings.infiniteLoop && (0 === d.active.index && g > 0 || d.active.last && 0 > g) ? s(f, "reset", 200) : Math.abs(g) >= d.settings.swipeThreshold ? (0 > g ? e.goToNextSlide() : e.goToPrevSlide(), e.stopAuto()) : s(f, "reset", 200)), d.viewport.unbind("touchend MSPointerUp pointerup", Q), d.viewport.get(0).releasePointerCapture && d.viewport.get(0).releasePointerCapture(d.pointerId) }, R = function (b) { if (d.initialized) if (d.working) window.setTimeout(R, 10); else { var c = a(window).width(), h = a(window).height(); (f !== c || g !== h) && (f = c, g = h, e.redrawSlider(), d.settings.onSliderResize.call(e, d.active.index)) } }, S = function (a) { var b = o(); d.settings.ariaHidden && !d.settings.ticker && (d.children.attr("aria-hidden", "true"), d.children.slice(a, a + b).attr("aria-hidden", "false")) }; return e.goToSlide = function (b, c) { var f, g, h, i, j = !0, k = 0, m = { left: 0, top: 0 }, n = null; if (!d.working && d.active.index !== b) { if (d.working = !0, d.oldIndex = d.active.index, 0 > b ? d.active.index = p() - 1 : b >= p() ? d.active.index = 0 : d.active.index = b, j = d.settings.onSlideBefore.call(e, d.children.eq(d.active.index), d.oldIndex, d.active.index), "undefined" != typeof j && !j) return d.active.index = d.oldIndex, void (d.working = !1); if ("next" === c ? d.settings.onSlideNext.call(e, d.children.eq(d.active.index), d.oldIndex, d.active.index) || (j = !1) : "prev" === c && (d.settings.onSlidePrev.call(e, d.children.eq(d.active.index), d.oldIndex, d.active.index) || (j = !1)), "undefined" != typeof j && !j) return d.active.index = d.oldIndex, void (d.working = !1); d.active.last = d.active.index >= p() - 1, (d.settings.pager || d.settings.pagerCustom) && D(d.active.index), d.settings.controls && G(), "fade" === d.settings.mode ? (d.settings.adaptiveHeight && d.viewport.height() !== l() && d.viewport.animate({ height: l() }, d.settings.adaptiveHeightSpeed), d.children.filter(":visible").fadeOut(d.settings.speed).css({ zIndex: 0 }), d.children.eq(d.active.index).css("zIndex", d.settings.slideZIndex + 1).fadeIn(d.settings.speed, function () { a(this).css("zIndex", d.settings.slideZIndex), E() })) : (d.settings.adaptiveHeight && d.viewport.height() !== l() && d.viewport.animate({ height: l() }, d.settings.adaptiveHeightSpeed), !d.settings.infiniteLoop && d.carousel && d.active.last ? "horizontal" === d.settings.mode ? (n = d.children.eq(d.children.length - 1), m = n.position(), k = d.viewport.width() - n.outerWidth()) : (f = d.children.length - d.settings.minSlides, m = d.children.eq(f).position()) : d.carousel && d.active.last && "prev" === c ? (g = 1 === d.settings.moveSlides ? d.settings.maxSlides - q() : (p() - 1) * q() - (d.children.length - d.settings.maxSlides), n = e.children(".bx-clone").eq(g), m = n.position()) : "next" === c && 0 === d.active.index ? (m = e.find("> .bx-clone").eq(d.settings.maxSlides).position(), d.active.last = !1) : b >= 0 && (i = b * q(), m = d.children.eq(i).position()), void 0 !== typeof m && (h = "horizontal" === d.settings.mode ? -(m.left - k) : -m.top, s(h, "slide", d.settings.speed))), d.settings.ariaHidden && S(d.active.index * q()) } }, e.goToNextSlide = function () { if (d.settings.infiniteLoop || !d.active.last) { var a = parseInt(d.active.index) + 1; e.goToSlide(a, "next") } }, e.goToPrevSlide = function () { if (d.settings.infiniteLoop || 0 !== d.active.index) { var a = parseInt(d.active.index) - 1; e.goToSlide(a, "prev") } }, e.startAuto = function (a) { d.interval || (d.interval = setInterval(function () { "next" === d.settings.autoDirection ? e.goToNextSlide() : e.goToPrevSlide() }, d.settings.pause), d.settings.autoControls && a !== !0 && F("stop")) }, e.stopAuto = function (a) { d.interval && (clearInterval(d.interval), d.interval = null, d.settings.autoControls && a !== !0 && F("start")) }, e.getCurrentSlide = function () { return d.active.index }, e.getCurrentSlideElement = function () { return d.children.eq(d.active.index) }, e.getSlideElement = function (a) { return d.children.eq(a) }, e.getSlideCount = function () { return d.children.length }, e.isWorking = function () { return d.working }, e.redrawSlider = function () { d.children.add(e.find(".bx-clone")).outerWidth(n()), d.viewport.css("height", l()), d.settings.ticker || r(), d.active.last && (d.active.index = p() - 1), d.active.index >= p() && (d.active.last = !0), d.settings.pager && !d.settings.pagerCustom && (t(), D(d.active.index)), d.settings.ariaHidden && S(d.active.index * q()) }, e.destroySlider = function () { d.initialized && (d.initialized = !1, a(".bx-clone", this).remove(), d.children.each(function () { void 0 !== a(this).data("origStyle") ? a(this).attr("style", a(this).data("origStyle")) : a(this).removeAttr("style") }), void 0 !== a(this).data("origStyle") ? this.attr("style", a(this).data("origStyle")) : a(this).removeAttr("style"), a(this).unwrap().unwrap(), d.controls.el && d.controls.el.remove(), d.controls.next && d.controls.next.remove(), d.controls.prev && d.controls.prev.remove(), d.pagerEl && d.settings.controls && !d.settings.pagerCustom && d.pagerEl.remove(), a(".bx-caption", this).remove(), d.controls.autoEl && d.controls.autoEl.remove(), clearInterval(d.interval), d.settings.responsive && a(window).unbind("resize", R), d.settings.keyboardEnabled && a(document).unbind("keydown", L), a(this).removeData("bxSlider")) }, e.reloadSlider = function (b) { void 0 !== b && (c = b), e.destroySlider(), h(), a(e).data("bxSlider", this) }, h(), a(e).data("bxSlider", this), this } } }(jQuery);

// Application Scripts:

// Десктоп меню (выпадайки)
// Мобильное меню
// Переключатель языка
// Сообщения об отправке формы
// Кнопка скролла страницы
// Галерея изображений
// Лайтбокс
// Галерея видео
// Модальное окно
// Слайдер категорий (если категорий будет больше чем 4)
// Если браузер не знает о svg-картинках
// ie8

jQuery(document).ready(function ($) {
    //Кэшируем
    var $window = $(window),
        $body = $('body');

    //
    // Десктоп меню (выпадайки)
    //---------------------------------------------------------------------------------------
    var initDesktopMenu = (function () {
        $('.js-menu li').on({
            mouseenter: function () {
                $(this).find('ul:first').stop(true, true).fadeIn('fast');
                $(this).find('a:first').addClass('hover');
            },
            mouseleave: function () {
                $(this).find('ul').stop(true, true).fadeOut('slow');
                $(this).find('a:first').removeClass('hover');
            }
        })
    })();

    //
    // Мобильное меню
    //---------------------------------------------------------------------------------------
    var initMobileMenu = (function () {
        var $hidden = '<div class="g-hidden" id="menu_clone"></div>';//необходимо запустить мобильное меню, предварительно удалив из него css-классы
        $body.append($hidden);//добавили временный скрытый блок
        $('.js-menu').clone().appendTo($('#menu_clone'));//клонировали в него десктоп-меню
        $('#menu_clone').find('ul, li').removeAttr('class');//убрали в нем классы десктоп-меню
        $('#menu_clone a').each(function () {//пробежались по линкам
            var isCurrent = false;
            if ($(this).hasClass('menu__link--current') || ($(this).hasClass('submenu__link--current'))) {
                isCurrent = true;//если содержит класс текущей страницы - изменили значение флага
            }
            $(this).removeAttr('class');//прибили в них классы десктоп-меню
            if (isCurrent) {
                $(this).addClass('current');//передали класс текущей страницы в мобильное меню
            }
        });
        $('#menu_clone > ul').slicknav({//запускаем мобильное меню
            label: '',
            allowParentLinks: true,//разрешаем переход по линкам, содержащим под-меню
            openedSymbol: '<i class="icon-down-dir"></i>',
            closedSymbol: '<i class="icon-right-dir"></i>',
            init: function () {
                $('#menu_clone').remove(); //убиваем временный скрытый блок
            }
        });
    })();


    //
    // Переключатель языка
    //---------------------------------------------------------------------------------------
    var langList = {
        showList: function () {
            var $el = $('.js-switcher');
            $el.find('button').addClass('active');
            $el.find('ul').slideDown();
            closeLangList();
        },
        hideList: function () {
            var $el = $('.js-switcher');
            $el.find('button').removeClass('active');
            $el.find('ul').hide();
            $body.unbind('click', this.hideList);
        }
    }

    $('.js-switcher').on('click', 'button', function () {
        if ($(this).hasClass('active')) {
            langList.hideList();
        } else {
            langList.showList();
        }
    });

    function closeLangList() {//будем закрывать список по клику где-то в документе
        $('.js-switcher').mouseleave(function () {
            $body.bind('click', langList.hideList);
        }).mouseenter(function () {
            $body.unbind('click', langList.hideList);
        });
    }

    //
    // Сообщения об отправке формы
    //---------------------------------------------------------------------------------------
    // после аякс-отправки формы ($form), если все ок - $form.find('.g-notice--ok').fadeIn();
    // если вернуло ошибку - $form.find('.g-notice--bad').fadeIn();
    var showFormNotice = (function () {
        var $notice = $('.js-notice');
        $notice.append('<a class="g-notice__close"><i class="icon-cancel"></i></a>'); //иконка закрытия
        
        $notice.on('click', '.g-notice__close', function (e) {//закроем блок по клику на иконку
            e.preventDefault();
            closeNotice($(this));
        });

        function closeNotice(el) {
            el.parent('div').fadeOut();
        }
    }());

    //
    // Кнопка скролла страницы
    //---------------------------------------------------------------------------------------
    var initPageScroller = (function () {
        var $scroller = $('<div class="scroll-up-btn"><i class="icon-up-open-big"></i></div>');
        $body.append($scroller);
        $window.on('scroll', function () {
            if ($(this).scrollTop() > 300) {
                $scroller.show();
            } else {
                $scroller.hide();
            }
        });
        $scroller.on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });
    }());


    //
    // Галерея изображений
    //---------------------------------------------------------------------------------------
    function initImgGallery() {
        $('.js-gallery a').lightbox({ blur: false });//подключаем лайтбокс
    }

    if ($('.js-gallery').length) {
        initImgGallery();
    }

    //
    // Лайтбокс
    //---------------------------------------------------------------------------------------
    $('.js-popup').lightbox({ blur: false });

    //
    // Галерея видео
    //---------------------------------------------------------------------------------------
    function initVideoGallery() {
        $('.js-video a').each(function () {//для каждого блока подгрузим превью видео
            var link = $(this).attr('href'),
                id = getYoutubeID(link);
            if (id) {
                $(this).css('background-image', 'url(' + getYoutubeThumb(id) + ')');
            }
        });

        $('.js-video').on('click', 'a', function (e) {//будем открывать видео в модальном окне
            e.preventDefault();
            var link = $(this).attr('href'),
                id = getYoutubeID(link);
            if (id) {
                $('#modal').find('iframe').attr('src', 'https://www.youtube.com/embed/' + id + '?rel=0&amp;showinfo=0');
                showModal.open('#modal');
            }
        });

        function getYoutubeID(url) {//парсим youtube-ссылку, возвращаем id видео
            var regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
            var match = url.match(regExp),
                urllink;
            if (match && match[1].length == 11) {
                urllink = match[1];
            } else {
                urllink = false;
            }
            return urllink;
        }

        function getYoutubeThumb(id) {//по id видео находим картинку
            var imagelink = "http:\/\/img.youtube.com\/vi\/" + id + "\/hqdefault.jpg";
            return imagelink;
        }
    }

    if ($('.js-video').length) {
        initVideoGallery();
    }

    //
    // Модальное окно
    //---------------------------------------------------------------------------------------
    var showModal = (function (link) {
        var
        method = {},
        $overlay,
        $modal,
        $close;

        // добавим в документ
        $overlay = $('<div id="overlay"></div>'); //оверлей
        $close = $('<a class="modal__close" href="#"><i class="icon-cancel"></i></a>'); //иконка закрыть


        $close.on('click', function (e) {
            e.preventDefault();
            method.close();
        });

        // центрируем окно
        method.center = function () {
            var top, left;

            top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
            left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;

            $modal.css({
                top: top + $window.scrollTop(),
                left: left + $window.scrollLeft()
            });
        };


        // открываем
        method.open = function (link) {
            $modal = $(link);
            $modal.append($close);
            method.center();
            $body.append($overlay);
            $window.bind('resize.modal', method.center);
            $modal.fadeIn();
            $overlay.fadeIn();

            $overlay.bind('click', function () {
                method.close();
            });
        };

        // закрываем
        method.close = function () {
            $modal.find('iframe').attr('src', '');//если в ьодальном окне было видео - убъем
            $modal.fadeOut('fast');
            $overlay.fadeOut('fast', function () {
                $overlay.unbind('click').remove(); //убиваем оверлей
            });
            $window.unbind('resize.modal');
        };

        return method;
    }());

    // клик по кнопке с атрибутом data-modal - открываем модальное окно
    $('[data-modal]').on('click', function (e) {//передаем айди модального окна
        e.preventDefault();
        var link = $(this).data('modal');
        if (link) { showModal.open(link); }
    });

    //
    // Слайдер категорий (если категорий будет больше чем 4)
    //---------------------------------------------------------------------------------------
    function initCategorySlider() {
        var $slider = $('.js-slider'),
            getSliderSettings = function () {//будем показывать разное кол-во слайдов на разных разрешениях
                var setting,
                    settings1 = {
                        maxSlides: 1,
                    },
                    settings2 = {
                        maxSlides: 2,
                    },
                    settings3 = {
                        maxSlides: 3,
                    },
                    settings4 = {
                        maxSlides: 4,
                    },
                    common = {
                        minSlides: 1,
                        moveSlides: 1,
                        slideWidth: 222,
                        slideMargin: 24,
                        auto: false,
                        pager: false,
                        infiniteLoop: true,
                        hideControlOnEnd: false
                    },
                    winW = $window.width();
                if (winW < 550) {
                    setting = $.extend(settings1, common);
                }
                if (winW >= 550 && winW < 800) {
                    setting = $.extend(settings2, common);
                }
                if (winW >= 800 && winW < 1000) {
                    setting = $.extend(settings3, common);
                }
                if (winW >= 1000) {
                    setting = $.extend(settings4, common);
                }
                return setting;
            }
        $slider = $slider.bxSlider(getSliderSettings()); //запускаем слайдер

        $window.on('resize', function () {
            setTimeout(recalcSliderSettings, 500);
        });

        function recalcSliderSettings() {
            $slider.reloadSlider($.extend(getSliderSettings(), { startSlide: $slider.getCurrentSlide() }));
        }
    }
    if($('.js-slider').length){initCategorySlider()}


    //
    // Если браузер не знает о svg-картинках
    //---------------------------------------------------------------------------------------
    if (!Modernizr.svg) {
        $('img[src*="svg"]').attr('src', function () {
            return $(this).attr('src').replace('.svg', '.png');
        });
    }
    //
    // ie8
    //---------------------------------------------------------------------------------------
    if ($('html').hasClass('lt-ie9')) {
        $('.product-cat-list li').filter(':nth-child(4n+1)').addClass('last');
        $('.js-gallery li').filter(':nth-child(4n+1)').addClass('last');
        $('.js-video li').filter(':nth-child(4n+1)').addClass('last');
        $('.product-list li').filter(':nth-child(3n+1)').addClass('last');
        $('.product-table tr').filter(':nth-child(2n+1)').addClass('alt');
    }
});
