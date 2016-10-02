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
var BannerComponent = (function () {
    function BannerComponent(elRef) {
        this.elRef = elRef;
        this.slides = [
            {
                htmlContent: "<h2>\u0411\u0420\u0418\u0424\u0418\u041D\u0413 \u0418 \u041E\u041F\u0420\u0415\u0414\u0415\u041B\u0415\u041D\u0418\u0415 \u0426\u0415\u041B\u0415\u0419</h2>\n\t\t\t\t\t<p>\u0410\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0435\u043C \u0446\u0435\u043B\u0438 \u0438 \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u0438 \u0412\u0430\u0448\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430, \u0446\u0435\u043B\u0435\u0432\u043E\u0439 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438 \u0438 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432. \u041F\u043E\u0441\u043B\u0435 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445, \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0441\u043A\u0438\u0445, \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u0445, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044E \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043A\u043E\u043C\u043C\u0435\u0440\u0446\u0438\u0438 \u2013 \u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0441\u0430\u0439\u0442\u0430 \u0434\u043B\u044F \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430.</p>\n\t\t\t\t\t<a routerLink=\"/services\" routerLinkActive=\"active\" class=\"bunner_btn accent_button\">\u0425\u043E\u0447\u0443 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0441 \u0412\u0430\u043C\u0438</a>",
                imgUrl: '/compiled/img/bg1.jpg',
            },
            {
                htmlContent: "<h2>\u041F\u0420\u041E\u0415\u041A\u0422\u0418\u0420\u041E\u0412\u0410\u041D\u0418\u0415 \u0418\u041D\u0422\u0415\u0420\u0424\u0415\u0419\u0421\u0410 \u0418 \u0414\u0418\u0417\u0410\u0419\u041D</h2>\n\t\t\t\t\t<p>\u0421\u043E\u0437\u0434\u0430\u0435\u043C \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u043E \u043F\u0440\u0438\u044F\u0442\u043D\u044B\u0439, \u043F\u043E\u043D\u044F\u0442\u043D\u044B\u0439, \u0443\u0434\u043E\u0431\u043D\u044B\u0439 \u0438 \u043B\u0435\u0433\u043A\u0438\u0439 \u0432 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441. \u0422\u0449\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u0440\u043E\u0434\u0443\u043C\u0430\u043D\u043D\u044B\u0439 \u0438 \u0433\u0440\u0430\u043C\u043E\u0442\u043D\u043E \u0441\u043A\u043E\u043D\u0441\u0442\u0440\u0443\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0432\u0435\u0431\u0441\u0430\u0439\u0442 \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0442 \u0412\u0430\u0448\u0438 \u043F\u0440\u043E\u0434\u0430\u0436\u0438, \u0432\u043E\u0432\u043B\u0435\u0447\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0438 \u043B\u043E\u044F\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u043A \u0431\u0440\u0435\u043D\u0434\u0443.</p>\n\t\t\t\t\t<a routerLink=\"/services\" routerLinkActive=\"active\" class=\"bunner_btn accent_button\">\u0425\u043E\u0447\u0443 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0441 \u0412\u0430\u043C\u0438</a>",
                imgUrl: '/compiled/img/bg2.jpg',
            },
            {
                htmlContent: "<h2>\u0420\u0410\u0417\u0420\u0410\u0411\u041E\u0422\u041A\u0410 \u0424\u0423\u041D\u041A\u0426\u0418\u041E\u041D\u0410\u041B\u0410</h2>\n\t\t\t\t\t<p>\u041F\u043E \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u043D\u043E\u043C\u0443 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u043C\u0443 \u0437\u0430\u0434\u0430\u043D\u0438\u044E \u0441\u043E\u0437\u0434\u0430\u0435\u043C \u200B\u200B\u0441\u0430\u0439\u0442\u044B \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u043F\u0435\u0440\u0435\u0434\u043E\u0432\u044B\u0445 \u043C\u0435\u0442\u043E\u0434\u043E\u0432 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u043D\u043E\u0432\u0435\u0439\u0448\u0438\u0445 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043A\u043E\u043C\u043C\u0435\u0440\u0446\u0438\u0438.</p>\n\t\t\t\t\t<a routerLink=\"/services\" routerLinkActive=\"active\" class=\"bunner_btn accent_button\">\u0425\u043E\u0447\u0443 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0441 \u0412\u0430\u043C\u0438</a>",
                imgUrl: '/compiled/img/bg3.jpg',
            },
            {
                htmlContent: "<h2>\u0422\u0415\u0421\u0422\u0418\u0420\u041E\u0412\u0410\u041D\u0418\u0415 \u0418 \u0417\u0410\u041F\u0423\u0421\u041A</h2>\n\t\t\t\t\t<p>\u0422\u0435\u0441\u0442\u0438\u0440\u0443\u0435\u043C \u043A\u0430\u0436\u0434\u0443\u044E \u0434\u0435\u0442\u0430\u043B\u044C \u0412\u0430\u0448\u0435\u0433\u043E \u0441\u0430\u0439\u0442\u0430 \u0434\u043B\u044F \u0443\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u043D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043A\u043E\u0432. \u041F\u043E\u0441\u043B\u0435 \u043E\u043A\u043E\u043D\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C \u0412\u0430\u0448 \u0441\u0430\u0439\u0442 \u043D\u0430 \u043F\u0440\u043E\u0441\u0442\u043E\u0440\u044B \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0430 \u0434\u043B\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0439 \u0441 google analytics</p>\n\t\t\t\t\t<a routerLink=\"/services\" routerLinkActive=\"active\" class=\"bunner_btn accent_button\">\u0425\u043E\u0447\u0443 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0441 \u0412\u0430\u043C\u0438</a>",
                imgUrl: '/compiled/img/bg4.jpg',
            },
            {
                htmlContent: "<h2>\u041E\u041F\u0422\u0418\u041C\u0418\u0417\u0410\u0426\u0418\u042F \u0418 \u041E\u0411\u0421\u041B\u0423\u0416\u0418\u0412\u0410\u041D\u0418\u0415</h2>\n\t\t\t\t\t<p>\u041E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u0435\u043C \u0432\u0435\u0431\u0441\u0430\u0439\u0442, \u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u0435\u043C \u0438 \u0430\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0435\u043C \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u044B \u0441\u0430\u0439\u0442\u0430 \u0438 \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435. \u041C\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u043D\u0430\u0434 \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u0435\u043C \u043F\u043E\u0441\u0435\u0449\u0430\u0435\u043C\u043E\u0441\u0442\u0438 \u0438 \u0432\u043E\u0432\u043B\u0435\u0447\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0435\u0439 \u0441\u0430\u0439\u0442\u0430.</p>\n\t\t\t\t\t<a routerLink=\"/services\" routerLinkActive=\"active\" class=\"bunner_btn accent_button\">\u0425\u043E\u0447\u0443 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0441 \u0412\u0430\u043C\u0438</a>",
                imgUrl: '/compiled/img/bg5.jpg',
            },
        ];
    }
    BannerComponent.prototype.ngOnInit = function () {
        jQuery(this.elRef.nativeElement).find("#owl-banner").owlCarousel({
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            autoPlay: 5000,
            stopOnHover: false,
            autoHeight: false,
            transitionStyle: "fade"
        });
    };
    BannerComponent = __decorate([
        core_1.Component({
            selector: 'owl-banner',
            templateUrl: 'app/components/owl_banner/banner.component.html'
        }), 
        __metadata('design:paramtypes', [core_2.ElementRef])
    ], BannerComponent);
    return BannerComponent;
}());
exports.BannerComponent = BannerComponent;
//# sourceMappingURL=banner.component.js.map