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
var router_1 = require('@angular/router');
var core_2 = require('@angular/core');
var MainComponent = (function () {
    function MainComponent(router, elRef) {
        this.router = router;
        this.elRef = elRef;
    }
    MainComponent.prototype.ngOnInit = function () {
        jQuery('body').scrollTop(0);
        jQuery(this.elRef.nativeElement).find('img.svg').each(function () {
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');
            jQuery.get(imgURL, function (data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');
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
        jQuery(this.elRef.nativeElement).find('svg use').each(function () {
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('xlink:href');
            jQuery.get(imgURL, function (data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');
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
        // Animated scroll
        // Start Animated scroll
        var winHeight = window.screen.height, animate_elements_obj = document.getElementsByClassName('to_animate'), animate_elements_arr = [];
        for (var i = 0; i < animate_elements_obj.length; i++) {
            animate_elements_arr[i] = animate_elements_obj[i];
        }
        window.onscroll = function () {
            var topOfWindow = window.pageYOffset;
            function animated_scrolling(item_that_should_be_animated) {
                var item = item_that_should_be_animated;
                if ((item.closest('.to_animate_wrap')).offsetTop < topOfWindow + (winHeight * .8)) {
                    if (!item.classList.contains('animated')) {
                        item.className = item.className.replace('to_animate ', 'animated ');
                    }
                    if (!item.classList.contains(item.getAttribute('data-animation'))) {
                        item.className += " " + item.getAttribute('data-animation');
                    }
                }
            }
            animate_elements_arr.forEach(function (item, i, arr) {
                if (item.closest('.to_animate_wrap').classList.contains('animation_series_wrap')) {
                    var timeout = 0, columns = 4, correction = 50, proj_obj = document.getElementsByClassName('series'), proj_arr = [], title = item.closest('.to_animate_wrap').getElementsByClassName('block_title')[0];
                    for (var k = 0; k < proj_obj.length; k++) {
                        proj_arr[k] = proj_obj[k];
                    }
                    if (title !== undefined) {
                        animated_scrolling(title);
                    }
                    proj_arr.forEach(function (item, i, arr) {
                        if (i % columns == 0) {
                            timeout = i / columns * columns * correction;
                        }
                        else {
                            timeout = timeout + columns * correction;
                        }
                        setTimeout(function () {
                            if (item !== undefined) {
                                animated_scrolling(item);
                            }
                        }, timeout);
                    });
                }
                else {
                    if (item !== undefined) {
                        animated_scrolling(item);
                    }
                }
            });
        };
        // End Animated scroll
    };
    MainComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-main',
            templateUrl: './main.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, core_2.ElementRef])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map