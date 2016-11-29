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
var router_1 = require("@angular/router");
var animations_1 = require("../shared/animations");
var HomeComponent = (function () {
    function HomeComponent(_router) {
        this._router = _router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    HomeComponent.prototype.submitContact = function () {
        alert(" Name: " + this.name + "\r\n Number: " + this.number + "\r\n Question: " + this.question);
        this.clear();
    };
    HomeComponent.prototype.goToTreeServices = function (link) {
        this._router.navigate(["/services", { link: link }]);
    };
    HomeComponent.prototype.clear = function () {
        this.name = "";
        this.number = "";
        this.question = "";
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "home-page",
            templateUrl: "./app/home/home.component.html",
            animations: [animations_1.routeAnimation],
            host: {
                '[@routeAnimation]': 'true',
                '[style.display]': "'block'"
            }
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map