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
var services_component_1 = require("./services.component");
var ServicesRoutingModule = (function () {
    function ServicesRoutingModule() {
    }
    ServicesRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild([
                    { path: 'services', component: services_component_1.ServicesComponent }
                ])],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], ServicesRoutingModule);
    return ServicesRoutingModule;
}());
exports.ServicesRoutingModule = ServicesRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3NlcnZpY2VzLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFFL0MsbUNBQWtDLHNCQUFzQixDQUFDLENBQUE7QUFRekQ7SUFBQTtJQUFxQyxDQUFDO0lBTnRDO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQyxRQUFRLENBQUM7b0JBQzVCLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUU7aUJBQ3JELENBQUMsQ0FBQztZQUNILE9BQU8sRUFBRSxDQUFDLHFCQUFZLENBQUM7U0FDMUIsQ0FBQzs7NkJBQUE7SUFDbUMsNEJBQUM7QUFBRCxDQUFyQyxBQUFzQyxJQUFBO0FBQXpCLDZCQUFxQix3QkFBSSxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL3NlcnZpY2VzLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBTZXJ2aWNlc0NvbXBvbmVudCB9IGZyb20gXCIuL3NlcnZpY2VzLmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xyXG4gICAgICAgIHsgcGF0aDogJ3NlcnZpY2VzJywgY29tcG9uZW50OiBTZXJ2aWNlc0NvbXBvbmVudCB9XHJcbiAgICBdKV0sXHJcbiAgICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VydmljZXNSb3V0aW5nTW9kdWxlIHsgfSJdfQ==
