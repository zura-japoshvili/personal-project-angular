import { NgModule } from '@angular/core';
import {Routes, RouterModule,} from "@angular/router";
import { LoginComponent } from "./features/login/login.component";
import {RegistrationComponent} from "./features/registration/registration.component";
import {LoginGuard} from "./core/guards/login.guard";
import {NotFoundComponent} from "./shared/not-found/not-found.component";

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
    path: 'main-menu',
    canActivate: [LoginGuard],
    loadChildren: () =>
      import('./features/main-menu/mainmenu.module').then(
        (res) => res.MainmenuModule)
  }
  ,
  {
    path: 'game-menu',
    loadChildren: () =>
      import('./features/game-menu/game-menu.module').then(
        (res) => res.GameMenuModule
      ),
    canActivate: [LoginGuard]
  },
  {
    path: 'game',
    loadChildren: () =>
      import('./features/game/game.module').then(
        (res) => res.GameModule
      ),
    canActivate: [LoginGuard]
  },
  {
    path: 'scoreboard',
    loadChildren: () =>
      import('./features/scoreboard/scoreboard.module').then(
        (res) => res.ScoreboardModule
      ),
    canActivate: [LoginGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
