import { Component, OnInit, keyframes, HostBinding,
    trigger, transition, animate,
    style, state } from '@angular/core';

@Component({
    selector: "services-page",
    templateUrl: "./app/services/services.component.html",
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
export class ServicesComponent implements OnInit {
    @HostBinding("@flyInOut") get routeAnimation() {
        return true;
    }

    ngOnInit() {

    }


   
}