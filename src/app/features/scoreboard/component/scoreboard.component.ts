import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserService} from "../../../core/services/user.service";
import {map, observable, Observable, of, tap} from "rxjs";
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
  userScore!: Observable<IUser[]>

  ngOnInit(): void {
    this.userScore = this.getScore()
    console.log(this.userScore)
  }
  public getScore (): Observable<IUser[]>{
    return this.UserService.getAllUsers().pipe(map((value:IUser[]) => {
      let array = value
      return array.sort((a, b) => b.score! - a.score!)
    }))
  }
}
