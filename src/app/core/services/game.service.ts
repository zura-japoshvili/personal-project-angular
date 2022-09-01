import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {IUser} from "../interfaces/userInterface";
import {CategoriesInt} from "../interfaces/categoriesInt";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient, private router: Router) { }

  public getCategories(): Observable<CategoriesInt>{
    return this.http.get<CategoriesInt>('https://opentdb.com/api_category.php');
  }

}
