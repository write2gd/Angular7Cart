import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../product.service';
import {IProduct} from '../../../models/Product';
import {Observable} from 'rxjs';
import {ProductState} from '../../product.reducer';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$: Observable<IProduct[]>;

  /*$ is given to a variable just to tell it is observable*/

  constructor(private productService: ProductService, private store: Store<ProductState>) {
  }

  ngOnInit() {
    /*this type is not for modifying the data*/
    this.productService.getProducts();

  }

}
