import { Component } from "@angular/core";
@Component({
    selector: "my-app",
    templateUrl: "./app/app.component.html"
})
export class AppComponent {
    closeNav() {
        document.getElementsByClassName("collapse")
    }

}