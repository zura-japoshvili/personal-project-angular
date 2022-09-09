import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, map, retry, tap, throwError} from "rxjs";
import {IUser} from "../interfaces/userInterface";
import {Observable} from "rxjs";
import {loginUserInt} from "../interfaces/loginUserInt";

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) {
  }

  private baseUrl = 'http://localhost:3000';

  public getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.baseUrl + '/user').pipe(
      retry(1),
      catchError(this.handleErrors)
    )
  }

  public userLogin(user: loginUserInt): Observable<IUser | undefined> {
    return this.getAllUsers().pipe(
      map((users) =>
        users.find(
          (regUser) =>
            regUser.email === user.email && regUser.password === user.password
        )
      )
    ).pipe(
      retry(1),
      catchError(this.handleErrors)
    )
  }

  public userRegistration(user: IUser): Observable<IUser> {
    user.score = 0;
    return this.http.post<IUser>(`${this.baseUrl}/user`, user).pipe(
      retry(1),
      catchError(this.handleErrors)
    )
  }

  private getScore(id: string): Observable<IUser> {
    return this.http.get<IUser>(`${this.baseUrl}/user/${id}`).pipe(
      retry(1),
      catchError(this.handleErrors)
    )
  }

  public setScore(id: string, userScore: number) {
    this.getScore(id).pipe(tap(user => {
      user.score! += userScore
      this.http.put(`${this.baseUrl}/user/${id}`, user).subscribe();
    })).subscribe()
  }

  private handleErrors(error: HttpErrorResponse) {
    let errorMessage: string
    if (error.error instanceof ErrorEvent) {
      errorMessage = `MESSAGE : ${error.error.message}`
    } else {
      errorMessage = `STATUS : ${error.status} MESSAGE : ${error.message}`;
    }
    return throwError(errorMessage)
  }

}
