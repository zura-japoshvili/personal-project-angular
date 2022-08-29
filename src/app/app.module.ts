import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { ReactiveFormsModule } from "@angular/forms";
import { RegistrationComponent } from './features/registration/registration.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { MainMenuComponent } from './features/mainmenu/mainMenu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
