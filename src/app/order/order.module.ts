import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@angular/material';
import {OrderRouterModule} from './order.routing';
import { AddOrderComponent } from './add-order/add-order.component';
import { SettleOrderComponent } from './settle-order/settle-order.component';
import { OrderComponent } from './order/order.component';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { AddOrderFooterComponent } from './add-order/add-order-footer/add-order-footer.component';
import {ModalComponent} from '../shared/modal/modal.component';
import {ProductSvrService} from './service/product-svr.service';
@NgModule({
  imports: [
    CommonModule,
    OrderRouterModule,
    MaterialModule,
    SharedModule,
    FormsModule
  ],
  declarations: [ AddOrderComponent, SettleOrderComponent, OrderComponent, ProductModalComponent, AddOrderFooterComponent],
  exports: [OrderComponent],
  providers:[ProductSvrService]

})
export class OrderModule { }
