import {ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
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

  @ViewChild('question') question!:ElementRef
  @ViewChild('answersCont') answersCont!:ElementRef

  public settings!: gameSettingInt

  ngOnInit(): void {
    this.settings = this.gameService.getSelectedData()
    this.generateQuestion()
  }

  private randomAnswers(arr: [], correct: string){
      let array: string[] = arr;
          array.push(correct)

    let length = 4;
    let randomArr = []
    let i = 0;

    while(length --){
      i = Math.floor(Math.random() * (length +1 ));
      randomArr.push(array[i]);
      array.splice(i, 1);
    }

    return randomArr;
  }

  public generateQuestion(){
    // this.gameService.getQuestion(this.settings.category, this.settings.diff)
    this.gameService.getQuestion(0, 0).pipe(tap((res) => {
      this.question.nativeElement.innerHTML = res.results[0].question;

      const randomAnswers = this.randomAnswers(res.results[0].incorrect_answers, res.results[0].correct_answer)

      let answers = '';
      randomAnswers.forEach(value => {
         answers+= `<button class="answers">${value}</button>`
      })

      this.answersCont.nativeElement.innerHTML = answers;
    })).subscribe()
  }
}
