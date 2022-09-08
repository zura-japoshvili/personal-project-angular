import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScoreboardComponent} from "./component/scoreboard.component";
import {NavigationComponent} from "../../shared/navigation/component/navigation.component";
import {RouterModule} from "@angular/router";
import {NavigationModule} from "../../shared/navigation/navigation.module";




@NgModule({
  declarations: [ScoreboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: ScoreboardComponent}]),
    NavigationModule
  ],
})
export class ScoreboardModule { }
