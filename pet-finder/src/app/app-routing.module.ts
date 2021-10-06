import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageModule} from "./pages/main-page/main-page.module";

const routes: Routes = [
  { path: '', component: MainPageModule },
  { pathMatch: '/auth', loadChildren: () => import("./pages/authorisation-page/authorisation-page.module")}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
