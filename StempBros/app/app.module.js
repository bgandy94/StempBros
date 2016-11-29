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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
//Router Module
var app_routing_module_1 = require("./app-routing.module");
//Feature Modules
var about_module_1 = require("./about/about.module");
var home_module_1 = require("./home/home.module");
var app_component_1 = require("./app.component");
var services_module_1 = require('./services/services.module');
var gallery_module_1 = require("./gallery/gallery.module");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                home_module_1.HomeModule,
                about_module_1.AboutModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                services_module_1.ServicesModule,
                gallery_module_1.GalleryModule
            ],
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUU5QyxpQ0FBOEIsMkJBQTJCLENBQUMsQ0FBQTtBQUMxRCxzQkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUU3QyxlQUFlO0FBQ2YsbUNBQWlDLHNCQUFzQixDQUFDLENBQUE7QUFFeEQsaUJBQWlCO0FBQ2pCLDZCQUE0QixzQkFBc0IsQ0FBQyxDQUFBO0FBQ25ELDRCQUEyQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ2hELDhCQUErQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pELGdDQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzVELCtCQUE4QiwwQkFBMEIsQ0FBQyxDQUFBO0FBZXpEO0lBQUE7SUFBeUIsQ0FBQztJQVoxQjtRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGdDQUFhO2dCQUNuQix3QkFBVTtnQkFDViwwQkFBVztnQkFDWCxxQ0FBZ0I7Z0JBQ2hCLG1CQUFXO2dCQUNYLGdDQUFjO2dCQUNkLDhCQUFhO2FBQ2hCO1lBQ0QsWUFBWSxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUM1QixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBQzVCLENBQUM7O2lCQUFBO0lBQ3VCLGdCQUFDO0FBQUQsQ0FBekIsQUFBMEIsSUFBQTtBQUFiLGlCQUFTLFlBQUksQ0FBQSIsImZpbGUiOiJhcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gIGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG4vL1JvdXRlciBNb2R1bGVcclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xyXG5cclxuLy9GZWF0dXJlIE1vZHVsZXNcclxuaW1wb3J0IHsgQWJvdXRNb2R1bGUgfSBmcm9tIFwiLi9hYm91dC9hYm91dC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgSG9tZU1vZHVsZSB9IGZyb20gXCIuL2hvbWUvaG9tZS5tb2R1bGVcIjtcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gICBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNlcnZpY2VzTW9kdWxlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zZXJ2aWNlcy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5TW9kdWxlIH0gZnJvbSBcIi4vZ2FsbGVyeS9nYWxsZXJ5Lm1vZHVsZVwiO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbQnJvd3Nlck1vZHVsZSxcclxuICAgICAgICBIb21lTW9kdWxlLFxyXG4gICAgICAgIEFib3V0TW9kdWxlLFxyXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsIFxyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIFNlcnZpY2VzTW9kdWxlLCBcclxuICAgICAgICBHYWxsZXJ5TW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50XSxcclxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH0iXX0=
