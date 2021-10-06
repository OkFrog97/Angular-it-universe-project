import { NgModule } from '@angular/core';
import { SpinnerUiComponent } from "./spinner-ui.component";
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [SpinnerUiComponent],
  declarations: [SpinnerUiComponent],
})
export class SpinnerUiModule {}
