import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainMenuComponent} from "./component/main-menu.component";
import {RouterModule} from "@angular/router";
import {NavigationModule} from "../../shared/navigation/navigation.module";



@NgModule({
  declarations: [MainMenuComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: MainMenuComponent }]),
    NavigationModule
  ],
})
export class MainmenuModule { }
