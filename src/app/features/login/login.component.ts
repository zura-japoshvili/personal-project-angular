import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormGroup, FormControl , Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserService} from "../../core/services/user.service";
import {tap} from "rxjs";

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
    this.UserService.userLogin(this.loginFormGroup.value).pipe(tap((response: any) => {
      console.log(response)
      // localStorage.setItem('token', response.accessToken)
      // localStorage.setItem('id', response.id)
      // localStorage.setItem('email', response.email)
    })).subscribe()

  }


  public toRegistration(): void{
    this.router.navigateByUrl('/registration').then()
  }

}
