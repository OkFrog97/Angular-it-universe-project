import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageModule} from "./pages/main-page/main-page.module";
import {AuthorisationPageModule} from "./pages/authorisation-page/authorisation-page.module";

const routes: Routes = [
  { path: 'auth', loadChildren: () => import("./pages/authorisation-page/authorisation-page.module").then((module) => module.AuthorisationPageModule)},
  { path: '', loadChildren: () => import("./pages/main-page/main-page.module").then((module)=> module.MainPageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MainPageModule, AuthorisationPageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
