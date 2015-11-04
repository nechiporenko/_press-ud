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

/*!
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

/*!
 * jquery.lightbox.js v1.3
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
!function (a) { "use strict"; a.fn.lightbox = function (b) { var c = { margin: 50, nav: !0, blur: !0, minSize: 0 }, d = { items: [], lightbox: null, image: null, current: null, locked: !1, caption: null, init: function (b) { d.items = b; var e = "lightbox-" + Math.floor(1e5 * Math.random() + 1); d.lightbox || (d.lightbox = a("body").find(".bodyGlobalLightbox"), 0 === d.lightbox.length && (a("body").append('<div id="' + e + '" class="lightbox bodyGlobalLightbox" style="display:none;"><a href="#" class="lightbox__close lightbox__button"></a><a href="#" class="lightbox__nav lightbox__nav--prev lightbox__button"></a><a href="#" class="lightbox__nav lightbox__nav--next lightbox__button"></a><div href="#" class="lightbox__caption"><p></p></div></div>'), d.lightbox = a("#" + e)), d.caption = a(".lightbox__caption", d.lightbox)), d.items.length > 1 && c.nav ? a(".lightbox__nav", d.lightbox).show() : a(".lightbox__nav", d.lightbox).hide(), d.bindEvents() }, loadImage: function () { c.blur && a("body").addClass("blurred"), a("img", d.lightbox).remove(), d.lightbox.fadeIn("fast").append('<span class="lightbox__loading"></span>'); var b = a('<img src="' + a(d.current).attr("href") + '" draggable="false">'); a(b).load(function () { a(".lightbox__loading").remove(), d.lightbox.append(b), d.image = a("img", d.lightbox).hide(), d.resizeImage(), d.setCaption() }) }, setCaption: function () { var b = a(d.current).data("caption"); b && b.length > 0 ? (d.caption.fadeIn(), a("p", d.caption).text(b)) : d.caption.hide() }, resizeImage: function () { var b, e, f, g, h; e = a(window).height() - c.margin, f = a(window).outerWidth(!0) - c.margin, d.image.width("").height(""), g = d.image.height(), h = d.image.width(), h > f && (b = f / h, h = f, g = Math.round(g * b)), g > e && (b = e / g, g = e, h = Math.round(h * b)), d.image.width(h).height(g).css({ top: (a(window).height() - d.image.outerHeight()) / 2 + "px", left: (a(window).width() - d.image.outerWidth()) / 2 + "px" }).show(), d.locked = !1 }, getCurrentIndex: function () { return a.inArray(d.current, d.items) }, next: function () { return d.locked ? !1 : (d.locked = !0, void (d.getCurrentIndex() >= d.items.length - 1 ? a(d.items[0]).click() : a(d.items[d.getCurrentIndex() + 1]).click())) }, previous: function () { return d.locked ? !1 : (d.locked = !0, void (d.getCurrentIndex() <= 0 ? a(d.items[d.items.length - 1]).click() : a(d.items[d.getCurrentIndex() - 1]).click())) }, bindEvents: function () { a(d.items).click(function (b) { if (!d.lightbox.is(":visible") && (a(window).width() < c.minSize || a(window).height() < c.minSize)) return void a(this).attr("target", "_blank"); var e = a(this)[0]; b.preventDefault(), d.current = e, d.loadImage(), a(document).on("keydown", function (a) { 27 === a.keyCode && d.close(), 39 === a.keyCode && d.next(), 37 === a.keyCode && d.previous() }) }), d.lightbox.on("click", function (a) { this === a.target && d.close() }), a(d.lightbox).on("click", ".lightbox__nav--prev", function () { return d.previous(), !1 }), a(d.lightbox).on("click", ".lightbox__nav--next", function () { return d.next(), !1 }), a(d.lightbox).on("click", ".lightbox__close", function () { return d.close(), !1 }), a(window).resize(function () { d.image && d.resizeImage() }) }, close: function () { a(document).off("keydown"), a(d.lightbox).fadeOut("fast"), a("body").removeClass("blurred") } }; a.extend(c, b), d.init(this) } }(jQuery);


// Application Scripts:

// Десктоп меню (выпадайки)
// Мобильное меню
// Переключатель языка
// Сообщения об отправке формы
// Кнопка скролла страницы
// Галерея изображений
// Модальное окно
// Если браузер не знает о svg-картинках

jQuery(document).ready(function ($) {
    //Кэшируем
    var $window = $(window),
        $body = $('body');

    //
    // Десктоп меню (выпадайки)
    //---------------------------------------------------------------------------------------
    var initDesktopMenu = (function () {
        $('.js-menu li').hover(function () {
            $(this).find('ul:first').stop(true, true).fadeIn('fast');
            $(this).find('a').filter(':first').addClass('hover');
        },
        function () {
            $(this).find('ul').stop(true, true).fadeOut('slow');
            $(this).find('a').filter(':first').removeClass('hover');
        });
    })();

    //
    // Мобильное меню
    //---------------------------------------------------------------------------------------
    var initMobileMenu = (function () {
        var $hidden = '<div class="g-hidden" id="menu_clone"></div>';
        $body.append($hidden);
        $('.js-menu').clone().appendTo($('#menu_clone'));
        $('#menu_clone').find('ul, li, a').removeAttr('class');
        $('#menu_clone > ul').slicknav({
            label: '',
            allowParentLinks: true,
            openedSymbol: '<i class="icon-down-dir"></i>',
            closedSymbol: '<i class="icon-right-dir"></i>',
            init: function () {
                $('#menu_clone').remove();
            }
        });
    })();

    //
    // Переключатель языка
    //---------------------------------------------------------------------------------------
    var langList = {
        showList: function () {
            $('.js-switcher').find('button').addClass('active');
            $('.js-switcher').find('ul').slideDown();
            closeLangList();
        },
        hideList: function () {
            $('.js-switcher').find('button').removeClass('active');
            $('.js-switcher').find('ul').hide();
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

    function closeLangList() {
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
            $(this).parent('div').fadeOut();
        });
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
        $('.js-gallery a').lightbox({ blur: false });

        if ($('html').hasClass('lt-ie9')) {
            $('.js-gallery li').filter(':nth-child(4n+1)').addClass('last');
        }
    }

    if ($('.js-gallery').length > 0) {
        initImgGallery();
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
    // Если браузер не знает о svg-картинках
    //---------------------------------------------------------------------------------------
    if (!Modernizr.svg) {
        $('img[src*="svg"]').attr('src', function () {
            return $(this).attr('src').replace('.svg', '.png');
        });
    }

});
