import { Component, OnInit, keyframes, HostBinding,
    trigger, transition, animate,
    style, state } from '@angular/core';
import { ActivatedRoute, Router, Params } from"@angular/router";
import 'rxjs/add/operator/switchMap';

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

    constructor(private _route: ActivatedRoute, private _router: Router) { }

    @HostBinding("@flyInOut") get routeAnimation() {
        return true;
    }

    ngOnInit() {
        var params = this._route.params;
        if (params.value.link) {
            var e = document.getElementById(params.value.link);
            e.scrollIntoView(true);
        }
    }


   
}