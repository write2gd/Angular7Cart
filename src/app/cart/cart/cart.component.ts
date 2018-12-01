import {Component, OnInit} from '@angular/core';
import {CartService} from '../cart.service';
import {ICartItem} from 'models/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  carts: ICartItem[] = [];

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.carts = this.cartService.getCart();
  }

}
