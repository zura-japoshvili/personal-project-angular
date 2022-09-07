import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GameComponent} from "./component/game.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [GameComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: GameComponent}])
  ]
})
export class GameModule { }
