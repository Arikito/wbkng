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
var ServicesComponent = (function () {
    function ServicesComponent(router, elRef) {
        this.router = router;
        this.elRef = elRef;
    }
    ServicesComponent.prototype.ngOnInit = function () {
        // $('html, body').animate({ scrollTop: '0' }, 500);
        $('body').scrollTop(0);
        if (window.location.hash.length > 0) {
            $('html, body').scrollTop($(window.location.hash).offset().top - 120);
            $(window.location.hash).trigger('click');
        }
        $(this.elRef.nativeElement).find('img.svg').each(function () {
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
        $(this.elRef.nativeElement).find('svg use').each(function () {
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
        function ScrollSpy(obj) {
            this.handlers = obj.find('.spy_handler');
            this.scrollTop = $(window).scrollTop();
            this.spy = function () {
                var parent = this;
                parent.scrollTop = $(window).scrollTop() + 120;
                parent.handlers.each(function () {
                    if ($(this.hash).offset().top <= parent.scrollTop && $(this.hash).offset().top + $(this.hash).outerHeight() > parent.scrollTop) {
                        parent.activate(this);
                    }
                });
            };
            this.activate = function (obj) {
                this.deactivate();
                $(obj).closest('li').addClass('active');
            };
            this.deactivate = function () {
                this.handlers.each(function () {
                    $(this).closest('li').removeClass('active');
                });
            };
        }
        var spy = new ScrollSpy($('#magic_scroll'));
        $(window).scroll(function () {
            spy.spy();
        });
    };
    ServicesComponent.prototype.ngOnDestroy = function () {
        $(window).unbind();
    };
    ServicesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-services',
            templateUrl: './services.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, core_2.ElementRef])
    ], ServicesComponent);
    return ServicesComponent;
}());
exports.ServicesComponent = ServicesComponent;
//# sourceMappingURL=services.component.js.map