import {Component, OnInit} from '@angular/core';
import {CartService} from '../cart.service';
import {ICartItem} from 'models/cartItem';
import {count, map, tap} from 'rxjs/operators';
import {pipe} from 'rxjs';

@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.scss']
})
export class MiniCartComponent implements OnInit {
  count: number;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    /* this.cartService.onCartUpdate.subscribe((cart: ICartItem[]) => {
       this.count = cart.length;
     });*/
    /*we can use the following way using pipe for multiple transformation*/
    this.cartService.onCartUpdate.pipe(
      map((cart: ICartItem[]) => cart.length),
      tap(val => console.log(val))
    ).subscribe(count => {
      this.count = count;
    });
  }

}
