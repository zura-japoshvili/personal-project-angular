import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule,} from "@angular/router";
import { LoginComponent } from "./features/login/login.component";
import {RegistrationComponent} from "./features/registration/registration.component";
import {MainMenuComponent} from "./features/main-menu/main-menu.component";
import {LoginGuard} from "./core/guards/login.guard";
import {GameMenuComponent} from "./features/game-menu/game-menu.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'mainMenu',
    canActivate: [LoginGuard],
    component: MainMenuComponent,
  }
  ,
  {
    path: 'game-menu',
    component: GameMenuComponent,
    // canActivate: [LoginGuard]
  }
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
