import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserService} from "../../../core/services/user.service";
import {Observable, tap} from "rxjs";
import {IUser} from "../../../core/interfaces/userInterface";

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScoreboardComponent implements OnInit {

  constructor(private http: HttpClient,
              private router: Router,
              private UserService: UserService) {

  }
  userScore!: IUser[]

  ngOnInit(): void {
    this.getScore()
  }
  public getScore (){
    this.UserService.getAllUsers().pipe(tap(value => {
      let array = value
      array.sort((a, b) => b.score! - a.score!)

      this.userScore = array
    }))
  }
}
