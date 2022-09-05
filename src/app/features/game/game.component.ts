import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {GameService} from "../../core/services/game.service";
import {gameSettingInt} from "../../core/interfaces/gameSettingInt";
import {tap} from "rxjs";
import {resultsInt} from "../../core/interfaces/resultsInt";

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
              ) {
  }

  @ViewChild('question') question!:ElementRef
  @ViewChild('nextBtn') nextBtn!:ElementRef
  @ViewChildren('answers') Answers!:QueryList<ElementRef>

  public settings!: gameSettingInt
  public score = 0
  public ansProgress = 1;
  public ansPercent = 10;
  private combo = 0;
  public EndGameActive = false

  ngOnInit(): void {
    this.settings = this.gameService.getSelectedData()
    this.generateQuestion()

  }

  private randomAnswers(arr: [], correct: string): string[]{
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

  private afterAnswered(bool: boolean){
    console.log(bool)
    this.btnMakeDisable(true);
    this.nextBtn.nativeElement.disabled = false;
    if (bool){
      this.combo += 20;
      this.score += (100 + this.combo)
    }else {
      this.combo = 0;
      this.score -= 20;
    }


  }

  private btnMakeDisable(bool: boolean){
    this.Answers.forEach(value => {
      value.nativeElement.disabled = bool;
      value.nativeElement.style.backgroundColor = '#3550a1';
    })
  }

  public nextQuestion(){
    this.btnMakeDisable(false);

    this.ansProgress++
    this.ansPercent += 10;

    this.nextBtn.nativeElement.disabled = true;

    this.generateQuestion()
  }

  public generateQuestion(){
    // this.gameService.getQuestion(this.settings.category, this.settings.diff)
    this.gameService.getQuestion(0, 0).pipe(tap((res: resultsInt) => {
      this.question.nativeElement.innerHTML = res.results[0].question;

      const randomAnswers = this.randomAnswers(res.results[0].incorrect_answers, res.results[0].correct_answer)
      console.log(res.results[0].correct_answer)
      this.Answers.forEach((value, index) => {
        value.nativeElement.innerHTML = randomAnswers[index]

        value.nativeElement.addEventListener('click',() =>{
          if (value.nativeElement.innerHTML == res.results[0].correct_answer){
            value.nativeElement.style.backgroundColor = '#137c12';
            this.afterAnswered(true)
          }else {
            value.nativeElement.style.backgroundColor = '#9d1e1e';
            this.afterAnswered(false)
          }
        })
      })

    })).subscribe()
  }
}
