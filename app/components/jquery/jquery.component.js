"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var JQ = (function () {
    function JQ() {
    }
    JQ.prototype.constuctor = function () {
        this.$ = $;
    };
    JQ.prototype.test = function (word) {
        if (word === void 0) { word = 'default value'; }
        console.log(word);
    };
    JQ.prototype.scrollTop = function (position) {
        if (position === void 0) { position = 0; }
        $('body').scrollTop(position);
    };
    JQ.prototype.inlineSvg = function () {
        $('html').find('img.svg').each(function () {
            var $img = $(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');
            $.get(imgURL, function (data) {
                // Get the SVG tag, ignore the rest
                var $svg = $(data).find('svg');
                // Add replaced image's ID to the new SVG
                if (typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if (typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass + ' replaced-svg');
                }
                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');
                // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
                if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                    $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
                }
                // Replace image with new SVG
                $img.replaceWith($svg);
            }, 'xml');
        });
        $('html').find('svg use').each(function () {
            var $img = $(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('xlink:href');
            $.get(imgURL, function (data) {
                // Get the SVG tag, ignore the rest
                var $svg = $(data).find('svg');
                // Add replaced image's ID to the new SVG
                if (typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if (typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass + ' replaced-svg');
                }
                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');
                // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
                if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                    $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
                }
                // Replace image with new SVG
                $img.replaceWith($svg);
            }, 'xml');
        });
    };
    JQ.prototype.animated_scroll = function () {
        // Start
        var winHeight = window.screen.height, animate_elements_obj = $('.to_animate'), animate_elements_arr = [];
        for (var i = 0; i < animate_elements_obj.length; i++) {
            animate_elements_arr[i] = animate_elements_obj[i];
        }
        window.onscroll = function () {
            var topOfWindow = window.pageYOffset;
            function animated_scrolling(item_that_should_be_animated) {
                var item = $(item_that_should_be_animated);
                if (item.closest('.to_animate_wrap')[0].offsetTop < topOfWindow + (winHeight * .6)) {
                    if (!item.hasClass('animated')) {
                        item.removeClass('to_animate ').addClass('animated ');
                    }
                    if (!item.hasClass(item.attr('data-animation'))) {
                        item.addClass(" " + item.attr('data-animation'));
                    }
                }
            }
            $.each(animate_elements_arr, function (index, value) {
                if ($(value).closest('.to_animate_wrap').hasClass('animation_series_wrap')) {
                    var timeout = 0, columns = 8, correction = 50, series_obj = $('.series'), series_arr = [], title = $(value).closest('.to_animate_wrap').find('.block_title')[0];
                    for (var k = 0; k < series_obj.length; k++) {
                        series_arr[k] = series_obj[k];
                    }
                    if (title !== undefined) {
                        animated_scrolling(title);
                    }
                    $.each(series_arr, function (index, value) {
                        if (i % columns == 0) {
                            timeout = i / columns * columns * correction;
                        }
                        else {
                            timeout = timeout + columns * correction;
                        }
                        setTimeout(function () {
                            animated_scrolling($(value));
                        }, timeout);
                    });
                }
                else {
                    animated_scrolling($(value));
                }
            });
        };
        // End
    };
    JQ = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], JQ);
    return JQ;
}());
exports.JQ = JQ;
//# sourceMappingURL=jquery.component.js.map