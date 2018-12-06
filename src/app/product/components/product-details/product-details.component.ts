import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../product.service';
import {IProduct} from '../../../models/Product';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {AddToCartCarts, CartActionTypes} from '../../../cart/cart.actions';
import {ICartItem} from 'models/cartItem';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productDetails: IProduct;

  constructor(private aRoute: ActivatedRoute, private productService: ProductService, private cartStore: Store<any>) {
  }

  ngOnInit() {
    const productId = this.aRoute.snapshot.paramMap.get('productId');
    this.productService.getProductById(productId).subscribe((product: IProduct) => {
      this.productDetails = product;
    });
  }

  addToCart() {
    const detailsToAdd: ICartItem = {
      productId: this.productDetails.id,
      quantity: 1
    };
    this.cartStore.dispatch(new AddToCartCarts(detailsToAdd));
  }

}
