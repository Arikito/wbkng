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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var LitelifeComponent = (function () {
    function LitelifeComponent(router, elRef) {
        this.router = router;
        this.elRef = elRef;
    }
    LitelifeComponent.prototype.ngOnInit = function () {
        jQuery('body').scrollTop(0);
    };
    return LitelifeComponent;
}());
LitelifeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-litelife',
        templateUrl: './litelife.component.html'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object])
], LitelifeComponent);
exports.LitelifeComponent = LitelifeComponent;
var _a, _b;
//# sourceMappingURL=litelife.component.js.map