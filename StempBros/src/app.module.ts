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
import { ServicesModule } from './services/services.module';
import { GalleryModule } from "./gallery/gallery.module";


@NgModule({
    imports: [BrowserModule,
        HomeModule,
        AboutModule,
        AppRoutingModule, 
        FormsModule,
        ServicesModule, 
        GalleryModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }