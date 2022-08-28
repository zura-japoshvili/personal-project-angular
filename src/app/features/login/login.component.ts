import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormGroup, FormControl , Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient,
              private router: Router) { }

  public loginFormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });


  ngOnInit(): void {

  }

  public toRegistration(): void{
    this.router.navigateByUrl('/registration').then()
  }

}
