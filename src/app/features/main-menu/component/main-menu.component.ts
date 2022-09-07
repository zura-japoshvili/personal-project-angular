import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-mainMenu',
  templateUrl: './main-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  public onStart(){
    this.router.navigateByUrl('/game-menu').then()
  }
  public onScoreboard(){
    this.router.navigateByUrl('/scoreboard').then()
  }
}
