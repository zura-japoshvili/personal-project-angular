import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Router } from "@angular/router";
import {map} from "rxjs";
import {IUser} from "../interfaces/userInterface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor(private http: HttpClient, private router: Router) { }
  private baseUrl = 'http://localhost:3000';

  private getAllUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this.baseUrl + '/user');
  }

  public userLogin(user: any) : Observable<IUser | undefined >{
    return this.getAllUsers().pipe(
      map((users) =>
        users.find(
          (regUser) =>
            regUser.email === user.email && regUser.password === user.password
        )
      )
    );
  }

  public userRegistration(user: any){
    return this.http.post(`${this.baseUrl}/user`, user)
  }
}
