import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../product.service';
import {Observable} from 'rxjs';
import {ProductState} from '../../product-list.reducer';
import {Store, select} from '@ngrx/store';
import {IProduct} from 'models/Product';
import {LoadProducts} from '../../product-list.actions';
import {getAllProducts} from '../../product-list.selector';

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
    this.store.dispatch(new LoadProducts());
    /* productStore is same name which was registered as afeature in product module*/
    this.products$ = this.store.pipe(select(getAllProducts));
    /*this.products$ = this.store.pipe(select(getExtraProducts));*/
  }

}
