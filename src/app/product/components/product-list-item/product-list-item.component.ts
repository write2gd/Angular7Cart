import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from '../../../models/Product';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {

  constructor() {
  }

  @Input()
  product: IProduct;


  ngOnInit() {
  }

}
