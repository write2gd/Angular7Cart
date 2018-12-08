import {Action} from '@ngrx/store';
import {IProduct} from 'models/Product';

export enum ProductActionTypes {
  LoadProducts = '[Product] Load Products',
  LoadProductsCompleted = '[Product] Load Products Completed',
  LoadProductsFailed = '[Product] Load Products Failed'
}

export class LoadProducts implements Action {
  readonly type = ProductActionTypes.LoadProducts;
}

export class LoadProductsCompleted implements Action {
  readonly type = ProductActionTypes.LoadProductsCompleted;

  constructor(public  payLoad: IProduct[]) {
  }
}

export class LoadProductsFailed implements Action {
  readonly type = ProductActionTypes.LoadProductsFailed;

}

export type ProductListActions = LoadProducts | LoadProductsCompleted | LoadProductsFailed;
