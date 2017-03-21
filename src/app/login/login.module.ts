import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {LoginComponent} from './login.component';
import {LoginManagerService} from './login-manager.service';
@NgModule(
  {
     imports: [
        CommonModule,
        SharedModule
     ],
    declarations: [LoginComponent],
    providers: [LoginManagerService],
    exports: [LoginComponent]
  }
)
export class LoginModule {};
