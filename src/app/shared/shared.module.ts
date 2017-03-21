import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {YbHttpService} from './yb-http.service';
import { ModalComponent } from './modal/modal.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ModalComponent],
  providers:[YbHttpService],
  exports: [ModalComponent]
})
export class SharedModule { }
