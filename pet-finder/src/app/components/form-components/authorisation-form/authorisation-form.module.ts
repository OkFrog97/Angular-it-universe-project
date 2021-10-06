import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorisationFormComponent } from "./authorisation-form.component";

@NgModule({
  imports: [CommonModule],
  exports: [AuthorisationFormComponent],
  declarations: [AuthorisationFormComponent],
})
export class AuthorisationFormModule {}
