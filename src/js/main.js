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
