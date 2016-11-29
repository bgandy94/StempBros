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
var GalleryComponent = (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(GalleryComponent.prototype, "routeAnimation", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.HostBinding("@flyInOut"), 
        __metadata('design:type', Object)
    ], GalleryComponent.prototype, "routeAnimation", null);
    GalleryComponent = __decorate([
        core_1.Component({
            selector: "gallery-page",
            templateUrl: "./app/gallery/gallery.component.html",
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
        __metadata('design:paramtypes', [])
    ], GalleryComponent);
    return GalleryComponent;
}());
exports.GalleryComponent = GalleryComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUV3QixlQUFlLENBQUMsQ0FBQTtBQWtCeEM7SUFBQTtJQVFBLENBQUM7SUFQRyxtQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUV5QixzQkFBSSw0Q0FBYzthQUFsQjtZQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7OztPQUFBO0lBRkQ7UUFBQyxrQkFBVyxDQUFDLFdBQVcsQ0FBQzs7MERBQUE7SUFyQjdCO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSxzQ0FBc0M7WUFDbkQsVUFBVSxFQUFFO2dCQUNSLGNBQU8sQ0FBQyxVQUFVLEVBQUU7b0JBQ2hCLFlBQUssQ0FBQyxJQUFJLEVBQUUsWUFBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7b0JBQ2xELGlCQUFVLENBQUMsV0FBVyxFQUFFO3dCQUNwQixZQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQzt3QkFDekMsY0FBTyxDQUFDLEdBQUcsQ0FBQztxQkFDZixDQUFDO29CQUNGLGlCQUFVLENBQUMsV0FBVyxFQUFFO3dCQUNwQixjQUFPLENBQUMsR0FBRyxFQUFFLFlBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7cUJBQ3pELENBQUM7aUJBQ0wsQ0FBQzthQUNMO1NBQ0osQ0FBQzs7d0JBQUE7SUFTRix1QkFBQztBQUFELENBUkEsQUFRQyxJQUFBO0FBUlksd0JBQWdCLG1CQVE1QixDQUFBIiwiZmlsZSI6ImdhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSG9zdEJpbmRpbmcsXHJcbiAgICB0cmlnZ2VyLCB0cmFuc2l0aW9uLCBhbmltYXRlLFxyXG4gICAgc3R5bGUsIHN0YXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImdhbGxlcnktcGFnZVwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBhbmltYXRpb25zOiBbXHJcbiAgICAgICAgdHJpZ2dlcignZmx5SW5PdXQnLCBbXHJcbiAgICAgICAgICAgIHN0YXRlKCdpbicsIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScgfSkpLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXHJcbiAgICAgICAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTEwMCUpJyB9KSxcclxuICAgICAgICAgICAgICAgIGFuaW1hdGUoMTAwKVxyXG4gICAgICAgICAgICBdKSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgxMDAsIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMDAlKScgfSkpXHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgXSlcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEdhbGxlcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0QmluZGluZyhcIkBmbHlJbk91dFwiKSBnZXQgcm91dGVBbmltYXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn0iXX0=
