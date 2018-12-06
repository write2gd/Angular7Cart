import {Action} from '@ngrx/store';
import {ICartItem} from 'models/cartItem';

export enum CartActionTypes {
  AddToCart = '[Cart] Load Carts'
}

export class AddToCartCarts implements Action {
  readonly type = CartActionTypes.AddToCart;

  constructor(public payLoad: ICartItem) {
  }
}

export type CartActions = AddToCartCarts;
