import { Component, OnInit } from "@angular/core";


import { routeAnimation } from "../shared/animations";

@Component({
    selector: "about-page",
    templateUrl: "./app/about/about.component.html",
    animations: [routeAnimation],
    host: {
        "[@routeAnimation]": "true",
        "[style.display]": "'block'"
    }
})
export class AboutComponent implements OnInit {

    ngOnInit(): any {
        window.scrollTo(0, 0);
    }
}