import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {gameSettingInt} from "../interfaces/gameSettingInt";
import {resultsInt} from "../interfaces/resultsInt";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient,
              ) {}

  private selectedData!: gameSettingInt
  public setSelectedData(data: gameSettingInt){
    this.selectedData = data;
  }
  public getSelectedData(){
    return this.selectedData;
  }
  public getQuestion(category: number | string, diff: number | string): Observable<resultsInt>{
    return this.http.get<resultsInt>(`https://opentdb.com/api.php?amount=1&category=${category}&difficulty=${diff}&type=multiple`).pipe(
      retry(1),
      catchError(this.handleErrors)
    )
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
