import { Component, OnInit ,Input, Output, EventEmitter, SimpleChange} from '@angular/core';
import {ProductSvrService} from 'app/order/service/product-svr.service';
import {ProModel} from 'app/order/model/pro-model';
@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent implements OnInit {
  @Input() isShow: boolean = false;
  @Output() isShowChange = new EventEmitter<boolean>();
  @Input() queryStr: string = '';
  @Output() onProSelected = new EventEmitter<ProModel>();
  private resultList:ProModel[] = [];
  constructor(private prosvr:ProductSvrService) { }

  ngOnInit() {
  }
  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    this.isShowChange.emit(this.isShow);
    if (this.isShow) {
      this.search();
    }
  }
  search () {
    this.prosvr.getPro({Fullname: this.queryStr})
      .then((proList: ProModel[])=> {
        this.resultList = proList;
      })
  }
  modalHide () {
    this.isShow = false;
    this.isShowChange.emit(this.isShow);
  }
  onProClick (pro:ProModel) {
    this.onProSelected.emit(pro);
    this.modalHide();
  }
}
