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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCx1QkFBK0IsaUJBQWlCLENBQUMsQ0FBQTtBQUVqRCwyQkFBK0Isc0JBQXNCLENBQUMsQ0FBQTtBQVl0RDtJQUVJLHVCQUFvQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUFJLENBQUM7SUFFeEMsZ0NBQVEsR0FBUjtRQUNJLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFNRCxxQ0FBYSxHQUFiO1FBQ0ksS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLGlCQUFpQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELHdDQUFnQixHQUFoQixVQUFpQixJQUFZO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQWxDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFVBQVUsRUFBRSxDQUFFLDJCQUFjLENBQUU7WUFDOUIsSUFBSSxFQUFFO2dCQUNGLG1CQUFtQixFQUFFLE1BQU07Z0JBQzNCLGlCQUFpQixFQUFFLFNBQVM7YUFDL0I7U0FDSixDQUFDOztxQkFBQTtJQTJCRixvQkFBQztBQUFELENBMUJBLEFBMEJDLElBQUE7QUExQlkscUJBQWEsZ0JBMEJ6QixDQUFBIiwiZmlsZSI6ImhvbWUvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFBhcmFtcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IHJvdXRlQW5pbWF0aW9uIH0gZnJvbSBcIi4uL3NoYXJlZC9hbmltYXRpb25zXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJob21lLXBhZ2VcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgYW5pbWF0aW9uczogWyByb3V0ZUFuaW1hdGlvbiBdLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICdbQHJvdXRlQW5pbWF0aW9uXSc6ICd0cnVlJyxcclxuICAgICAgICAnW3N0eWxlLmRpc3BsYXldJzogXCInYmxvY2snXCJcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7IH1cclxuICAgIFxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbnVtYmVyOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcXVlc3Rpb246IHN0cmluZztcclxuXHJcbiAgICBzdWJtaXRDb250YWN0KCkge1xyXG4gICAgICAgIGFsZXJ0KFwiIE5hbWU6IFwiICsgdGhpcy5uYW1lICsgXCJcXHJcXG4gTnVtYmVyOiBcIiArIHRoaXMubnVtYmVyICsgXCJcXHJcXG4gUXVlc3Rpb246IFwiICsgdGhpcy5xdWVzdGlvbik7XHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGdvVG9UcmVlU2VydmljZXMobGluazogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtcIi9zZXJ2aWNlc1wiLCB7bGluazogbGlua31dKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMubnVtYmVyID0gXCJcIjtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uID0gXCJcIjtcclxuICAgIH1cclxufSJdfQ==
