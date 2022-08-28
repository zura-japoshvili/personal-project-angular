import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }
  private baseUrl = 'http://localhost:3000';

  public userLogin(user: any){
    return this.http.post(`${this.baseUrl}/login`, user)
  }
  public userRegistration(user: any){
    return this.http.post(`${this.baseUrl}/user`, user)
  }
}
