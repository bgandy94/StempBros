import { Component, OnInit } from '@angular/core';
import { Router, Params } from "@angular/router";

import { routeAnimation } from "../shared/animations";


@Component({
    selector: "home-page",
    templateUrl: "./app/home/home.component.html",
    animations: [ routeAnimation ],
    host: {
        '[@routeAnimation]': 'true',
        '[style.display]': "'block'"
    }
})
export class HomeComponent implements OnInit {

    constructor(private _router: Router) { }
    
    ngOnInit() {
        window.scrollTo(0, 0);
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
}