import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {GameService} from "../../core/services/game.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-game-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './game-menu.component.html',
  styleUrls: ['./game-menu.component.scss']
})
export class GameMenuComponent implements OnInit {
  // https://opentdb.com/api.php?amount=10&category=0&difficulty=0&type=multiple
  constructor(private http: HttpClient,
              private router: Router,
              private gameService: GameService,
              ) { }
  //
  // public categories:any[] = []

  gameMenuForm = new FormGroup({
    category: new FormControl(0),
    diff: new FormControl(0)
  })
  ngOnInit(): void {
  }

  public onStart(){
    this.gameService.setSelectedData(this.gameMenuForm.value);
    this.router.navigateByUrl('/game').then()
  }

  // public setCategories(){
  //   this.gameService.getCategories().pipe(tap((res) => {
  //     res.trivia_categories.forEach(value => {
  //
  //     })
  //    })).subscribe()
  // }
}

//
// const response = res.trivia_categories;
//   let options = "<option class='categories'value=0>Any</option>";
//   for(let i in response) {
//   options += `<option class='categories'value=${response[i].id}>${response[i].name}</option>`;
// }
//
// @ViewChild('quiz-category') ;
