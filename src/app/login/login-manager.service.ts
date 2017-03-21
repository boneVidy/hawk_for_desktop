import { Injectable } from '@angular/core';
import {YbHttpService} from '../shared/yb-http.service';
interface LoginQueryObj {
  LoginName:string,
  Password: string
}
@Injectable()
export class LoginManagerService {
  constructor(private YbHttpService:YbHttpService) { }
  login (param: LoginQueryObj) {
    return this.YbHttpService.post('Account/CheckLogin', param)
        .then(data => console.log(data));
      ;
  }
}
