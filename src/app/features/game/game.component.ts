import {ChangeDetectionStrategy, Component, Input, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {GameService} from "../../core/services/game.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent implements OnInit {

  constructor(private http: HttpClient,
              private router: Router,
              private gameService: GameService,) { }

  ngOnInit(): void {
    console.log(this.gameService.getSelectedData())
  }

}
