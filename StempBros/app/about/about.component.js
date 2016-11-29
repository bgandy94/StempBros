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
var animations_1 = require("../shared/animations");
var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: "about-page",
            templateUrl: "./app/about/about.component.html",
            animations: [animations_1.routeAnimation],
            host: {
                "[@routeAnimation]": "true",
                "[style.display]": "'block'"
            }
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0L2Fib3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBR2xELDJCQUErQixzQkFBc0IsQ0FBQyxDQUFBO0FBV3REO0lBQUE7SUFLQSxDQUFDO0lBSEcsaUNBQVEsR0FBUjtRQUNJLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFiTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsa0NBQWtDO1lBQy9DLFVBQVUsRUFBRSxDQUFDLDJCQUFjLENBQUM7WUFDNUIsSUFBSSxFQUFFO2dCQUNGLG1CQUFtQixFQUFFLE1BQU07Z0JBQzNCLGlCQUFpQixFQUFFLFNBQVM7YUFDL0I7U0FDSixDQUFDOztzQkFBQTtJQU1GLHFCQUFDO0FBQUQsQ0FMQSxBQUtDLElBQUE7QUFMWSxzQkFBYyxpQkFLMUIsQ0FBQSIsImZpbGUiOiJhYm91dC9hYm91dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5cclxuaW1wb3J0IHsgcm91dGVBbmltYXRpb24gfSBmcm9tIFwiLi4vc2hhcmVkL2FuaW1hdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYWJvdXQtcGFnZVwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIGFuaW1hdGlvbnM6IFtyb3V0ZUFuaW1hdGlvbl0sXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgXCJbQHJvdXRlQW5pbWF0aW9uXVwiOiBcInRydWVcIixcclxuICAgICAgICBcIltzdHlsZS5kaXNwbGF5XVwiOiBcIidibG9jaydcIlxyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWJvdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIG5nT25Jbml0KCk6IGFueSB7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgfVxyXG59Il19
