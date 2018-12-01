import {Injectable} from '@angular/core';
import {ICartItem} from 'models/cartItem';
import {IProduct} from 'models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: ICartItem[] = [];

  constructor() {
  }

  public addToCart(product: IProduct, quantity: number = 1) {
    this.cart.push({product, quantity});
  }

  public getCart() {
    return this.cart;
  }
}
