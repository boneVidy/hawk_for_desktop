import { Component, OnInit } from '@angular/core';
//import {LoginManagerService} from './login-manager.service';
import {Router} from '@angular/router';
import {LoginManagerService} from './login-manager.service';
@Component(
  {
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
  }

)
export class LoginComponent implements OnInit {
  private Password: string;
  private LoginName: string;
  constructor(private LoginManagerService: LoginManagerService, private router: Router) { }

  ngOnInit() {
  }
  private login ():void {
    this.LoginManagerService.login({LoginName: this.LoginName, Password: this.Password})
        .then(res => {
          this.router.navigate(['order/addOrder']);
        })
      ;
  }
}
