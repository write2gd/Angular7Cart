import {Injectable} from '@angular/core';
import {ICartItem} from 'models/cartItem';
import {IProduct} from 'models/Product';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public onCartUpdate: Subject<ICartItem[]> = new Subject<ICartItem[]>();
  private cart: ICartItem[] = [];

  constructor() {
  }

  public addToCart(product: IProduct, quantity: number = 1) {
    this.cart.push({product, quantity});
    this.onCartUpdate.next(this.cart);
  }

  public getCart() {
    return this.cart;
  }
}
