import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-order-footer',
  templateUrl: './add-order-footer.component.html',
  styleUrls: ['./add-order-footer.component.scss']
})
export class AddOrderFooterComponent implements OnInit {
  private proQueryStr:string = '';
  @Output() onProQueryChange = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  proQueryChange () {
    this.onProQueryChange.emit(this.proQueryStr);
  }
}
