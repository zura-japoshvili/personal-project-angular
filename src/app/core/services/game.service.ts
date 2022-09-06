import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CategoriesInt} from "../interfaces/categoriesInt";
import {gameSettingInt} from "../interfaces/gameSettingInt";
import {resultsInt} from "../interfaces/resultsInt";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient,
              ) {}
  // https://opentdb.com/api.php?amount=1&category=${category}&difficulty=${difficulty}&type=multiple

  private selectedData!: gameSettingInt
  public getCategories(): Observable<CategoriesInt>{
    return this.http.get<CategoriesInt>('https://opentdb.com/api_category.php');
  }
  public setSelectedData(data: gameSettingInt){
    this.selectedData = data;
  }
  public getSelectedData(){
    return this.selectedData;
  }

  public getQuestion(category: number | string, diff: number | string): Observable<resultsInt>{
    return this.http.get<resultsInt>(`https://opentdb.com/api.php?amount=1&category=${category}&difficulty=${diff}&type=multiple`)
  }

}
