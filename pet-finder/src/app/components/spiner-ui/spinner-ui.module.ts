import { NgModule } from '@angular/core';
import { SpinnerUiComponent } from "./spinner-ui.component";
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [SpinnerUiComponent],
  declarations: [SpinnerUiComponent],
})
export class SpinnerUiModule {}
