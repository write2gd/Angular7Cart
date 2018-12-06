import {Component, OnInit} from '@angular/core';
import {ICartItem} from 'models/cartItem';
import {select, Store} from '@ngrx/store';
import {getAllCartItems} from '../cart.selector';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  carts: ICartItem[] = [];

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    this.store.pipe(select(getAllCartItems)).subscribe((list: ICartItem[]) => {
      this.carts = list;
    });
  }
}
