import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {MdSnackBar} from '@angular/material';
import 'rxjs/add/operator/toPromise';
import URL from '../../webapi';
export interface respData {
  Code: number | string,
  Message: string,
  Value: any,
  Proposal?: string
};
@Injectable()
export class YbHttpService {
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http, public toast: MdSnackBar) { }
  post (api: string, param: Object = {}):Promise<respData> {
    return this.http.post(`${URL}${api}`,JSON.stringify(param),{headers: this.headers})
               .toPromise()
               .then(response => this.successHandle(response.json() as respData))
               .catch(this.handleError)
               ;
  }
  private createQueryString (param:Object):string {
    let paramStr = '?';
    if (param) {
        for (let k in param) {
          if (param.hasOwnProperty(k)) {
            paramStr += (`${k}=${param[k]}&`);
          }
        }
    }
    paramStr = paramStr.substring(0, paramStr.length - 1);
    return paramStr;
  }
  get (api:string,  param: Object = {}):Promise<respData> {
    let paramStr = this.createQueryString(param);
    return this.http.get(`${URL}${api}\\${paramStr}`, {headers: this.headers})
            .toPromise()
            .then(response => this.successHandle(response.json() as respData))
            .catch(this.handleError);
  }
  handleError (err) {
    this.toast.open('服务器错误', '确定', {
      duration: 2000,
    });
    console.log(err);
  }
  successHandle (respData:respData) {
    let self = this;
    return new Promise((resolve, reject) => {
      if (respData.Code !== 0) {
        self.toast.open(respData.Message, '确定', {
          duration: 2000,
        });
        return reject(respData.Message);
      }
      resolve(respData.Value);
    });
  }
}
