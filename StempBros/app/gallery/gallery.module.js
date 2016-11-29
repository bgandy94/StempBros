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
var forms_1 = require("@angular/forms");
var gallery_routing_module_1 = require("./gallery-routing.module");
var gallery_component_1 = require("./gallery.component");
var GalleryModule = (function () {
    function GalleryModule() {
    }
    GalleryModule = __decorate([
        core_1.NgModule({
            imports: [gallery_routing_module_1.GalleryRoutingModule, forms_1.FormsModule],
            declarations: [gallery_component_1.GalleryComponent],
            exports: [gallery_component_1.GalleryComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], GalleryModule);
    return GalleryModule;
}());
exports.GalleryModule = GalleryModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcnkvZ2FsbGVyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5QyxzQkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUU3Qyx1Q0FBcUMsMEJBQTBCLENBQUMsQ0FBQTtBQUNoRSxrQ0FBaUMscUJBQXFCLENBQUMsQ0FBQTtBQVF2RDtJQUFBO0lBQTZCLENBQUM7SUFOOUI7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBRSw2Q0FBb0IsRUFBRSxtQkFBVyxDQUFFO1lBQzlDLFlBQVksRUFBRSxDQUFDLG9DQUFnQixDQUFDO1lBQ2hDLE9BQU8sRUFBRSxDQUFDLG9DQUFnQixDQUFDO1NBQzlCLENBQUM7O3FCQUFBO0lBRTJCLG9CQUFDO0FBQUQsQ0FBN0IsQUFBOEIsSUFBQTtBQUFqQixxQkFBYSxnQkFBSSxDQUFBIiwiZmlsZSI6ImdhbGxlcnkvZ2FsbGVyeS5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEdhbGxlcnlSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vZ2FsbGVyeS1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBHYWxsZXJ5Q29tcG9uZW50IH0gZnJvbSBcIi4vZ2FsbGVyeS5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbIEdhbGxlcnlSb3V0aW5nTW9kdWxlLCBGb3Jtc01vZHVsZSBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbR2FsbGVyeUNvbXBvbmVudF0sXHJcbiAgICBleHBvcnRzOiBbR2FsbGVyeUNvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5TW9kdWxlIHsgfSJdfQ==
