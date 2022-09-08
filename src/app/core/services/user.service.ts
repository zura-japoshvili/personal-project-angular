import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, tap} from "rxjs";
import {IUser} from "../interfaces/userInterface";
import {Observable} from "rxjs";
import {loginUserInt} from "../interfaces/loginUserInt";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:3000';

  public getAllUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this.baseUrl + '/user');
  }

  public userLogin(user: loginUserInt) : Observable<IUser | undefined >{
    return this.getAllUsers().pipe(
      map((users) =>
        users.find(
          (regUser) =>
            regUser.email === user.email && regUser.password === user.password
        )
      )
    );
  }

  public userRegistration(user: IUser): Observable<IUser>{
    user.score = 0;
    return this.http.post<IUser>(`${this.baseUrl}/user`, user)
  }

  private getScore(id: string): Observable<IUser>{
    return this.http.get<IUser>(`${this.baseUrl}/user/${id}`);
  }

  public setScore(id: string, userScore: number){
    this.getScore(id).pipe(tap(user => {
      user.score! += userScore

      this.http.put(`${this.baseUrl}/user/${id}`, user).subscribe();
    })).subscribe()
  }

}
