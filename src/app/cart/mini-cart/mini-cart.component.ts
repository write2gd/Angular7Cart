import {Component, OnInit} from '@angular/core';
import {ICartItem} from 'models/cartItem';
import {count, map, tap} from 'rxjs/operators';
import {pipe} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {getItemCounter} from '../cart.selector';

@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.scss']
})
export class MiniCartComponent implements OnInit {
  count: number;

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    this.store.pipe(select(getItemCounter)).subscribe((itemCounter: number) => {
      this.count = itemCounter;
    });

  }

}
