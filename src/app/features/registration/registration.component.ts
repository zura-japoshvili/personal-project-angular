import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {passwordValidator} from "../../core/password-validator";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserService} from "../../core/services/user.service";
import {tap} from "rxjs";
import {IUser} from "../../core/interfaces/userInterface";


@Component({
  selector: 'app-registration',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private http: HttpClient,
              private router: Router,
              private UserService: UserService) { }

  public regFormGroup = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
  }, { validators: passwordValidator });

  ngOnInit(): void {
  }
  public onRegister(){

    this.UserService.userRegistration(this.regFormGroup.value as IUser).pipe(tap((response :IUser) => {
      console.log(response)
    })).subscribe()
  }

  public toLogin():void {
    this.router.navigateByUrl('/login').then()
  }
  get email(){
    return this.regFormGroup.get('email') as FormControl;
  }
  get fullName(){
    return this.regFormGroup.get('fullName') as FormControl
  }
  get pass(){
    return this.regFormGroup.get('password') as FormControl
  }
  get validatePass(){
    if (this.regFormGroup.get('password') !== this.regFormGroup.get('confirmPassword')){
      return true;
    }
    return false;
  }

}
