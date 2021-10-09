import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorisationPageComponent } from "./authorisation-page.component";
import { AuthorisationFormModule } from "../../components/form-components/authorisation-form/authorisation-form.module";
import { RegistrationFormModule } from "../../components/form-components/registration-form/registration-form.module";
import { AuthorisationPageRoutingModule } from "./authorisation-page-routing.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [CommonModule, AuthorisationFormModule, RegistrationFormModule, AuthorisationPageRoutingModule, MatFormFieldModule, MatSliderModule, MatInputModule],
  exports: [AuthorisationPageComponent],
  declarations: [AuthorisationPageComponent]
})
export class AuthorisationPageModule {}
