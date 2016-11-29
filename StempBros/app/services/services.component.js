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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUF1QyxpQkFBaUIsQ0FBQyxDQUFBO0FBR3pELDJCQUErQixzQkFBc0IsQ0FBQyxDQUFBO0FBV3REO0lBRUksMkJBQW9CLE1BQXNCLEVBQVUsT0FBZTtRQUEvQyxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFBSSxDQUFDO0lBR3hFLG9DQUFRLEdBQVI7UUFBQSxpQkFZQztRQVZHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDL0IsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNaLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0osQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQTFCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsd0NBQXdDO1lBQ3JELFVBQVUsRUFBRSxDQUFDLDJCQUFjLENBQUM7WUFDNUIsSUFBSSxFQUFFO2dCQUNGLG1CQUFtQixFQUFFLE1BQU07Z0JBQzNCLGlCQUFpQixFQUFJLFNBQVM7YUFDakM7U0FDSixDQUFDOzt5QkFBQTtJQW1CRix3QkFBQztBQUFELENBbEJBLEFBa0JDLElBQUE7QUFsQlkseUJBQWlCLG9CQWtCN0IsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5cclxuaW1wb3J0IHsgcm91dGVBbmltYXRpb24gfSBmcm9tIFwiLi4vc2hhcmVkL2FuaW1hdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwic2VydmljZXMtcGFnZVwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hcHAvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIGFuaW1hdGlvbnM6IFtyb3V0ZUFuaW1hdGlvbl0sXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgXCJbQHJvdXRlQW5pbWF0aW9uXVwiOiBcInRydWVcIixcclxuICAgICAgICBcIltzdHlsZS5kaXNwbGF5XVwiICA6IFwiJ2Jsb2NrJ1wiXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBsaW5rOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7IH1cclxuXHJcblxyXG4gICAgbmdPbkluaXQoKTogYW55IHtcclxuXHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgIHRoaXMuX3JvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgdGhpcy5saW5rID0gcGFyYW1zW1wibGlua1wiXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5saW5rKSB7XHJcbiAgICAgICAgICAgIHZhciBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5saW5rKTtcclxuICAgICAgICAgICAgaWYgKGUpIHtcclxuICAgICAgICAgICAgICAgIGUuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==
