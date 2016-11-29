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
var animations_1 = require("../shared/animations");
var ServicesComponent = (function () {
    function ServicesComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
    }
    ServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this._route.params.subscribe(function (params) {
            _this.link = params["link"];
        });
        if (this.link) {
            var e = document.getElementById(this.link);
            if (e) {
                e.scrollIntoView();
            }
        }
    };
    ServicesComponent = __decorate([
        core_1.Component({
            selector: "services-page",
            templateUrl: "./app/services/services.component.html",
            animations: [animations_1.routeAnimation],
            host: {
                "[@routeAnimation]": "true",
                "[style.display]": "'block'"
            }
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], ServicesComponent);
    return ServicesComponent;
}());
exports.ServicesComponent = ServicesComponent;
//# sourceMappingURL=services.component.js.map