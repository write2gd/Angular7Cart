import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../product.service';
import {IProduct} from '../../../models/Product';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {AddToCartCarts, CartActionTypes} from '../../../cart/cart.actions';
import {ICartItem} from 'models/cartItem';
import {LoadProducts} from '../product-list/product-list.actions';
import {getAllProducts} from '../product-list/product-list.selector';
import {GetProduct} from './product-details.actions';
import {getProduct} from './product-details.selector';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;

  constructor(private aRoute: ActivatedRoute, private productService: ProductService, private store: Store<any>) {
  }

  ngOnInit() {
    this.store.dispatch(new GetProduct());
    this.store.pipe(select(getProduct)).subscribe((p: IProduct) => {
      this.product = p;
    });
  }

  addToCart() {
    const detailsToAdd: ICartItem = {
      productId: this.product.id,
      quantity: 1
    };
    this.store.dispatch(new AddToCartCarts(detailsToAdd));
  }

}
