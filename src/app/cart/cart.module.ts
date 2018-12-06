import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from './cart/cart.component';
import {MiniCartComponent} from './mini-cart/mini-cart.component';
import {StoreModule} from '@ngrx/store';
import * as fromCart from './cart.reducer';

@NgModule({
  declarations: [CartComponent, MiniCartComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('cartStore', fromCart.reducer)
  ],
  exports: [
    MiniCartComponent
  ]
})
export class CartModule {
}
