import {ChangeDetectionStrategy, Component, Input, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {GameService} from "../../core/services/game.service";
import {gameSettingInt} from "../../core/interfaces/gameSettingInt";
import {tap} from "rxjs";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent implements OnInit {

  constructor(private http: HttpClient,
              private router: Router,
              private gameService: GameService,
              ) { }

  public settings!: gameSettingInt
  ngOnInit(): void {
    this.settings = this.gameService.getSelectedData()
    this.generateQuestion()
  }
  public generateQuestion(){
    // this.gameService.getQuestion(this.settings.category, this.settings.diff)
    this.gameService.getQuestion(0, 0).pipe(tap((res) => {
      console.log(res.results);
    })).subscribe()
  }
}
