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
var slides_service_1 = require('./slides.service');
var BannerComponent = (function () {
    function BannerComponent(elRef, slidesService) {
        this.elRef = elRef;
        this.slidesService = slidesService;
    }
    BannerComponent.prototype.ngOnInit = function () {
        this.getSlides();
        jQuery(this.elRef.nativeElement).ready(function () {
            jQuery(this).find("#owl-banner").owlCarousel({
                slideSpeed: 300,
                paginationSpeed: 400,
                singleItem: true,
                autoPlay: 5000,
                stopOnHover: false,
                autoHeight: false,
                transitionStyle: "fade"
            });
        });
    };
    BannerComponent.prototype.getSlides = function () {
        var _this = this;
        this.slidesService.getSlides()
            .subscribe(function (result) { return _this.slides = result; }, function (error) { return _this.errorMessage = error; });
    };
    BannerComponent = __decorate([
        core_1.Component({
            selector: 'owl-banner',
            templateUrl: 'app/components/owl_banner/banner.component.html',
            providers: [slides_service_1.SlidesService]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, slides_service_1.SlidesService])
    ], BannerComponent);
    return BannerComponent;
}());
exports.BannerComponent = BannerComponent;
//# sourceMappingURL=banner.component.js.map