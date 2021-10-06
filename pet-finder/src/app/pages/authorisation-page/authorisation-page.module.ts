import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthorisationPageComponent} from "./authorisation-page.component";
import {AuthorisationFormModule} from "../../components/form-components/authorisation-form/authorisation-form.module";
import {RegistrationFormModule} from "../../components/form-components/registration-form/registration-form.module";

@NgModule({
  imports: [CommonModule, AuthorisationFormModule, RegistrationFormModule],
  exports: [AuthorisationPageComponent],
  declarations: [AuthorisationPageComponent]
})
export class AuthorisationPageModule {}
