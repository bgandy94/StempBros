import { Component, OnInit, HostBinding,
    trigger, transition, animate,
    style, state } from '@angular/core';

import { Router, Params } from "@angular/router";

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

    constructor(private _router: Router) { }
    
    ngOnInit() {

    }

    public name: string;
    public number: string;
    public question: string;

    submitContact() {
        alert(" Name: " + this.name + "\r\n Number: " + this.number + "\r\n Question: " + this.question);
        this.clear();
    }

    goToTreeServices(link: string) {
        this._router.navigate(["/services", {link: link}]);
    }

    clear() {
        this.name = "";
        this.number = "";
        this.question = "";
    }


    @HostBinding("@flyInOut") get routeAnimation() {
        return true;
    }
}