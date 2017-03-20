import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { MaterialModule } from '@angular/material';


// uitil 公用组件  service 指令
import {SharedModule} from './shared/shared.module';

import {NewsModule} from './news/news.module';

import AppRouting from './app.routing';

//
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageComponent } from './page/page.component';
import {OrderModule} from './order/order.module';

import {LoginManagerService} from './login/login-manager.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    SharedModule,
    NewsModule,
    OrderModule,
    RouterModule.forRoot(AppRouting)
  ],
  providers: [LoginManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
