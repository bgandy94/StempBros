﻿import { NgModule }      from "@angular/core";
import { FormsModule } from "@angular/forms";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

@NgModule({
    imports: [ HomeRoutingModule, FormsModule ],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})
export class HomeModule { }