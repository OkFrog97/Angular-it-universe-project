import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorisationPageComponent } from "./authorisation-page.component";

const routes: Routes = [
  {
  path: 'auth',
  component: AuthorisationPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorisationPageRoutingModule {}
