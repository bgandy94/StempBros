import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";


import { routeAnimation } from "../shared/animations";

@Component({
    selector: "services-page",
    templateUrl: "./app/services/services.component.html",
    animations: [routeAnimation],
    host: {
        "[@routeAnimation]": "true",
        "[style.display]"  : "'block'"
    }
})
export class ServicesComponent implements OnInit {
    link: string;
    constructor(private _route: ActivatedRoute, private _router: Router) { }


    ngOnInit(): any {

        window.scrollTo(0, 0);
        this._route.params.subscribe(params => {
            this.link = params["link"];
        });
        if (this.link) {
            var e = document.getElementById(this.link);
            if (e) {
                e.scrollIntoView();
            }
        }
    }
}