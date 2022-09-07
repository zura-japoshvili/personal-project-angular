import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {GameMenuComponent} from "./component/game-menu.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [GameMenuComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: GameMenuComponent}]),
    ReactiveFormsModule
  ]
})
export class GameMenuModule { }
