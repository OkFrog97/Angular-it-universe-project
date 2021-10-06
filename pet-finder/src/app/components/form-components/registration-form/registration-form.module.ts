import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegistrationFormComponent} from "./registration-form.component";

@NgModule({
  declarations: [RegistrationFormComponent],
  imports: [CommonModule],
  exports: [RegistrationFormComponent]
})
export class RegistrationFormModule {}
