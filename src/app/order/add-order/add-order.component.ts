import { Component, OnInit } from '@angular/core';
import {AddOrderFooterComponent} from './add-order-footer/add-order-footer.component';
import {ProModel} from '../model/pro-model';
@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})

export class AddOrderComponent implements OnInit {
  private products:ProModel[] = [];
  private isShow:boolean = false;
  private searchQuery:string = '';
  private TotalValue:number = 0;
  constructor() { }

  ngOnInit() {
  }
  toogleModal () {
    this.isShow = true;
  }
  onProQueryChange (querystr:string) {
    if (!querystr) {
      return;
    }
    this.searchQuery = querystr;
    this.isShow = true;
  }
  onProSelected (pro:ProModel) {
    var index = this.IndexOfProInProducts(pro);
    if (index >= 0) {
      this.products[index].Quantity ++;
      this.products[index].Amount = this.products[index].Quantity * this.products[index].SalePrice;
    } else {
      pro.Quantity = 1;
      pro.Amount = pro.SalePrice;
      this.products.push(pro);
    }
    this.TotalValue = this.getTotal();
  }
  swapPro (index:number) {
    let tmpPro:ProModel;
    tmpPro = this.products[0];
    this.products[0] = this.products[index];
    this.products[index] = tmpPro;
  }
  IndexOfProInProducts (pro:ProModel):number {
    for (let i = 0; i < this.products.length ; i++) {
      if (this.products[i].ProductCode === pro.ProductCode) {
        return i;
      }
    }
    return -1;
  }
  qtyChange (pro:ProModel) {
    pro.Amount = pro.Quantity * pro.SalePrice;
    this.TotalValue = this.getTotal();
  }
  getTotal () {
    let total = 0;
    this.products.forEach((pro:ProModel) => {
      total += pro.Amount;
    });
    return total;
  }
}
