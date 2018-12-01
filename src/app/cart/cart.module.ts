import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from './cart/cart.component';
import {MiniCartComponent} from './mini-cart/mini-cart.component';

@NgModule({
  declarations: [CartComponent, MiniCartComponent],
  imports: [
    CommonModule
  ]
})
export class CartModule {
}
