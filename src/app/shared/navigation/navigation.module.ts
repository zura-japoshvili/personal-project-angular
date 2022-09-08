import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavigationComponent} from "./component/navigation.component";



@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule
  ],
  exports: [NavigationComponent]
})
export class NavigationModule { }
