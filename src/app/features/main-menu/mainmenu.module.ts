import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainMenuComponent} from "./component/main-menu.component";
import {RouterModule} from "@angular/router";
import {NavigationComponent} from "../../shared/navigation/navigation.component";



@NgModule({
  declarations: [MainMenuComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: MainMenuComponent }])
  ]
})
export class MainmenuModule { }
