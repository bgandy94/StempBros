import { NgModule }      from "@angular/core";
import { RouterModule, Routes }  from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

//Router Module
import { AppRoutingModule } from "./app-routing.module";

//Feature Modules
import { AboutModule } from "./about/about.module";
import { HomeModule } from "./home/home.module";
import { AppComponent }   from "./app.component";


@NgModule({
    imports: [BrowserModule,
        HomeModule,
        AboutModule,
        AppRoutingModule, 
        FormsModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }