import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) { }
  // public fullName = localStorage.getItem('fullName');
  public fullName = 'asdas'
  ngOnInit(): void {
  }

  public logOut(){
    localStorage.clear()
    console.log(1)
    this.router.navigateByUrl('/').then()
  }

}
