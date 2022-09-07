import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScoreboardComponent} from "./component/scoreboard.component";
import {NavigationComponent} from "../../shared/navigation/navigation.component";
import {RouterModule} from "@angular/router";




@NgModule({
  declarations: [ScoreboardComponent, NavigationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: ScoreboardComponent}]),
  ]
})
export class ScoreboardModule { }
