import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {GameService} from "../../core/services/game.service";
import {map, tap} from "rxjs";
import {CategoriesInt} from "../../core/interfaces/categoriesInt";

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
              private gameService: GameService) { }

  ngOnInit(): void {
    this.setCategories()
  }

  public setCategories(){
    this.gameService.getCategories().pipe(tap((res) => {
      const response = res.trivia_categories;
      let options = "<option class='categories'value=0>Any</option>";
      for(let i in response) {
        options += `<option class='categories'value=${response[i].id}>${response[i].name}</option>`;
      }


    })).subscribe()
  }


}
