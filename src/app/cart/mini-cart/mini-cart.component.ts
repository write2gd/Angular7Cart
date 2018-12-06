import {Component, OnInit} from '@angular/core';
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

  constructor() {
  }

  ngOnInit() {

  }

}
