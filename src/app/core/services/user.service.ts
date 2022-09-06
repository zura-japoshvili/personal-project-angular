import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {IUser} from "../interfaces/userInterface";
import {Observable} from "rxjs";
import {loginUserInt} from "../interfaces/loginUserInt";

@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:3000';

  private getAllUsers(): Observable<IUser[]>{
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
    return this.http.post<IUser>(`${this.baseUrl}/user`, user)
  }
}
