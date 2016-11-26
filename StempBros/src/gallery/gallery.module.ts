import { NgModule }      from "@angular/core";
import { FormsModule } from "@angular/forms";

import { GalleryRoutingModule } from "./gallery-routing.module";
import { GalleryComponent } from "./gallery.component";

@NgModule({
    imports: [ GalleryRoutingModule, FormsModule ],
    declarations: [GalleryComponent],
    exports: [GalleryComponent]
})

export class GalleryModule { }