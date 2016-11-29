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
var services_routing_module_1 = require("./services-routing.module");
var services_component_1 = require("./services.component");
var ServicesModule = (function () {
    function ServicesModule() {
    }
    ServicesModule = __decorate([
        core_1.NgModule({
            imports: [services_routing_module_1.ServicesRoutingModule],
            declarations: [services_component_1.ServicesComponent],
            exports: [services_component_1.ServicesComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ServicesModule);
    return ServicesModule;
}());
exports.ServicesModule = ServicesModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3NlcnZpY2VzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThCLGVBQWUsQ0FBQyxDQUFBO0FBRTlDLHdDQUF1QywyQkFBMkIsQ0FBQyxDQUFBO0FBRW5FLG1DQUFrQyxzQkFBc0IsQ0FBQyxDQUFBO0FBT3pEO0lBQUE7SUFBOEIsQ0FBQztJQUwvQjtRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLCtDQUFxQixDQUFDO1lBQ2hDLFlBQVksRUFBRSxDQUFDLHNDQUFpQixDQUFDO1lBQ2pDLE9BQU8sRUFBRSxDQUFDLHNDQUFpQixDQUFDO1NBQy9CLENBQUM7O3NCQUFBO0lBQzRCLHFCQUFDO0FBQUQsQ0FBOUIsQUFBK0IsSUFBQTtBQUFsQixzQkFBYyxpQkFBSSxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL3NlcnZpY2VzLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgU2VydmljZXNSb3V0aW5nTW9kdWxlIH0gIGZyb20gXCIuL3NlcnZpY2VzLXJvdXRpbmcubW9kdWxlXCI7XHJcblxyXG5pbXBvcnQgeyBTZXJ2aWNlc0NvbXBvbmVudCB9IGZyb20gXCIuL3NlcnZpY2VzLmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtTZXJ2aWNlc1JvdXRpbmdNb2R1bGVdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbU2VydmljZXNDb21wb25lbnRdLFxyXG4gICAgZXhwb3J0czogW1NlcnZpY2VzQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VydmljZXNNb2R1bGUgeyB9Il19
