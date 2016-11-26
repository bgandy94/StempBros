import { Component, OnInit, HostBinding,
    trigger, transition, animate,
    style, state } from '@angular/core';

@Component({
    selector: "home-page",
    templateUrl: "./app/home/home.component.html",
    animations: [
        trigger('flyInOut', [
            state('in', style({ transform: 'translateX(0)' })),
            transition('void => *', [
                style({ transform: 'translateX(-100%)' }),
                animate(100)
            ]),
            transition('* => void', [
                animate(100, style({ transform: 'translateX(100%)' }))
            ])
        ])
    ]
})
export class HomeComponent implements OnInit {

    ngOnInit() {

    }

    @HostBinding("@flyInOut") get routeAnimation() {
        return true;
    }
}