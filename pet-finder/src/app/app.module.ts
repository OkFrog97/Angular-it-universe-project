import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerUiModule } from "./components/ui-components/spiner-ui/spinner-ui.module";
import { AuthorisationPageModule} from "./pages/authorisation-page/authorisation-page.module";
import { MainPageModule} from "./pages/main-page/main-page.module";
import {RouterModule} from "@angular/router";
import { PetCardComponent } from './components/pet-card/pet-card.component';


@NgModule({
  declarations: [
    AppComponent,
    PetCardComponent,
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    SpinnerUiModule,
    AuthorisationPageModule,
    MainPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
