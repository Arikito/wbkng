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
var core_2 = require('@angular/core');
var TechsComponent = (function () {
    function TechsComponent(elRef) {
        this.elRef = elRef;
    }
    TechsComponent.prototype.ngOnInit = function () {
        jQuery(this.elRef.nativeElement).find("#owl-techn").owlCarousel({
            items: 6,
            itemsDesktop: [1000, 5],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [600, 2],
            itemsMobile: false,
            singleItem: false,
            pagination: false,
            autoPlay: 5000
        });
    };
    TechsComponent = __decorate([
        core_1.Component({
            selector: 'my-tech-owl',
            template: "<div id=\"owl-techn\" class=\"owl-carousel owl-theme owl_techn\">\n\t\t\t\t<div class=\"page_item\">\n\t\t\t\t\t<img class=\"svg_img svg\" src=\"/compiled/img/php.svg\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"page_item\">\n\t\t\t\t\t<img class=\"svg_img svg\" src=\"/compiled/img/jquery.svg\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"page_item\">\n\t\t\t\t\t<img class=\"svg_img svg\" src=\"/compiled/img/html.svg\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"page_item\">\n\t\t\t\t\t<img class=\"svg_img svg\" src=\"/compiled/img/jquery.svg\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"page_item\">\n\t\t\t\t\t<img class=\"svg_img svg\" src=\"/compiled/img/php.svg\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"page_item\">\n\t\t\t\t\t<img class=\"svg_img svg\" src=\"/compiled/img/wp.svg\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"page_item\">\n\t\t\t\t\t<img class=\"svg_img svg\" src=\"/compiled/img/php.svg\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"page_item\">\n\t\t\t\t\t<img class=\"svg_img svg\" src=\"/compiled/img/jquery.svg\">\n\t\t\t\t</div>\n\t\t\t</div>"
        }), 
        __metadata('design:paramtypes', [core_2.ElementRef])
    ], TechsComponent);
    return TechsComponent;
}());
exports.TechsComponent = TechsComponent;
//# sourceMappingURL=techs.component.js.map