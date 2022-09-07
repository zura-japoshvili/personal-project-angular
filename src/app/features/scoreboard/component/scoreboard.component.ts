import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserService} from "../../../core/services/user.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScoreboardComponent implements OnInit {

  constructor(private http: HttpClient,
              private router: Router,
              private UserService: UserService) { }

  ngOnInit(): void {
    this.UserService.getAllUsers().pipe(tap(value => {
      let array = value
          array.sort((a, b) => b.score! - a.score!)
    })).subscribe()
  }

}
