import { NgModule }      from "@angular/core";
import { RouterModule, Routes }  from "@angular/router";

const routes: Routes = [
    { path: 'about', loadChildren: "./app/about/about.module#AboutModule" },
    { path: '', loadChildren: "./app/home/home.module#HomeModule" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }