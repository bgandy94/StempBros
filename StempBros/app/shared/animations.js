"use strict";
var core_1 = require("@angular/core");
exports.routeAnimation = core_1.trigger("routeAnimation", [
    core_1.state("*", core_1.style({
        opacity: 1,
        transform: "translateX(0)"
    })),
    core_1.transition(":enter", [
        core_1.style({
            opacity: 0,
            transform: "translateX(-100%)"
        }),
        core_1.animate("0.2s ease-in")
    ]),
    core_1.transition(":leave", [
        core_1.animate("0.5s ease-out", core_1.style({
            opacity: 0,
            transform: "translateY(100%)"
        }))
    ])
]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hbmltYXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBMkQsZUFBZSxDQUFDLENBQUE7QUFFOUQsc0JBQWMsR0FBUSxjQUFPLENBQUMsZ0JBQWdCLEVBQUU7SUFDekQsWUFBSyxDQUFDLEdBQUcsRUFDTCxZQUFLLENBQUM7UUFDRixPQUFPLEVBQUUsQ0FBQztRQUNWLFNBQVMsRUFBRSxlQUFlO0tBQzdCLENBQUMsQ0FDTDtJQUNELGlCQUFVLENBQUMsUUFBUSxFQUFFO1FBQ2pCLFlBQUssQ0FBQztZQUNGLE9BQU8sRUFBRSxDQUFDO1lBQ1YsU0FBUyxFQUFFLG1CQUFtQjtTQUNqQyxDQUFDO1FBQ0YsY0FBTyxDQUFDLGNBQWMsQ0FBQztLQUMxQixDQUFDO0lBQ0YsaUJBQVUsQ0FBQyxRQUFRLEVBQUU7UUFDakIsY0FBTyxDQUFDLGVBQWUsRUFBRSxZQUFLLENBQUM7WUFDM0IsT0FBTyxFQUFFLENBQUM7WUFDVixTQUFTLEVBQUUsa0JBQWtCO1NBQ2hDLENBQUMsQ0FBQztLQUNOLENBQUM7Q0FDTCxDQUFDLENBQUMiLCJmaWxlIjoic2hhcmVkL2FuaW1hdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlQW5pbWF0aW9uOiBhbnkgPSB0cmlnZ2VyKFwicm91dGVBbmltYXRpb25cIiwgW1xyXG4gICAgc3RhdGUoXCIqXCIsXHJcbiAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgwKVwiXHJcbiAgICAgICAgfSlcclxuICAgICksXHJcbiAgICB0cmFuc2l0aW9uKFwiOmVudGVyXCIsIFtcclxuICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKC0xMDAlKVwiXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgYW5pbWF0ZShcIjAuMnMgZWFzZS1pblwiKVxyXG4gICAgXSksXHJcbiAgICB0cmFuc2l0aW9uKFwiOmxlYXZlXCIsIFtcclxuICAgICAgICBhbmltYXRlKFwiMC41cyBlYXNlLW91dFwiLCBzdHlsZSh7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKDEwMCUpXCJcclxuICAgICAgICB9KSlcclxuICAgIF0pXHJcbl0pOyJdfQ==
