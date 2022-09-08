import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormGroup, FormControl , Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserService} from "../../core/services/user.service";
import {pipe, tap} from "rxjs";
import {loginUserInt} from "../../core/interfaces/loginUserInt";
import {IUser} from "../../core/interfaces/userInterface";

@Component({
  selector: 'app-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {



  constructor(private http: HttpClient,
              private router: Router,
              private UserService: UserService) {
  }

  public loginFormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });


  ngOnInit(): void {

  }

  public onLogin(){
    this.UserService.userLogin(this.loginFormGroup.value as loginUserInt).pipe(tap((response: IUser | undefined) => {
      if (response){
        localStorage.setItem("id", (response.id)!.toString())
        localStorage.setItem('email', response.email)
        localStorage.setItem('fullName', response.fullName)
        console.log(localStorage)
        this.router.navigateByUrl('/main-menu').then()
      }else {
        alert('The entered data is incorrect')
      }

    })).subscribe()

  }


  public toRegistration(): void{
    this.router.navigateByUrl('/registration').then()
  }

}
