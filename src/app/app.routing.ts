import {Routes} from '@angular/router';
import {OrderComponent} from './order/order/order.component';
import {LoginComponent} from './login/login.component';
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'order',
    component: OrderComponent
  }
];

export default appRoutes;
