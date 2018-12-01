import {Component, OnInit} from '@angular/core';
import {CartService} from '../cart.service';

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
    this.count = this.cartService.getCart().length;
  }

}
