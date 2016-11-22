import { Component, OnInit, HostBinding,
    trigger, transition, animate,
    style, state } from '@angular/core';

@Component({
    selector: "about-page",
    templateUrl: "./app/about/about.component.html",
    animations: [
        trigger('routeAnimation', [
            state('*',
                style({
                    opacity: 1,
                    transform: 'translateX(0)'
                })
            ),
            transition(':enter', [
                animate("0.5s ease-in", style({
                    opacity: 0,
                    transform: "translateX(100%)"
                })),
            transition(':leave', [
                animate('0.5s ease-out', style({
                    opacity: 0,
                    transform: 'translateY(100%)'
                }))
            ])
        ])
    ]
})
export class AboutComponent implements OnInit{

    ngOnInit() {

    }

    
    @HostBinding("@routeAnimation") get routeAnimation() {
        return true;
    }
}