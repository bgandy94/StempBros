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
require('rxjs/add/operator/switchMap');
var ServicesComponent = (function () {
    function ServicesComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
    }
    Object.defineProperty(ServicesComponent.prototype, "routeAnimation", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    ServicesComponent.prototype.ngOnInit = function () {
        //var params = this._route.params;
        //if (params.value.link) {
        //    var e = document.getElementById(params.value.link);
        //    e.scrollIntoView(true);
        //}
    };
    __decorate([
        core_1.HostBinding("@flyInOut"), 
        __metadata('design:type', Object)
    ], ServicesComponent.prototype, "routeAnimation", null);
    ServicesComponent = __decorate([
        core_1.Component({
            selector: "services-page",
            templateUrl: "./app/services/services.component.html",
            animations: [
                core_1.trigger('flyInOut', [
                    core_1.state('in', core_1.style({ transform: 'translateX(0)' })),
                    core_1.transition('void => *', [
                        core_1.style({ transform: 'translateX(-100%)' }),
                        core_1.animate(100)
                    ]),
                    core_1.transition('* => void', [
                        core_1.animate(100, core_1.style({ transform: 'translateX(100%)' }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], ServicesComponent);
    return ServicesComponent;
}());
exports.ServicesComponent = ServicesComponent;
