import {Action} from '@ngrx/store';
import {IProduct} from 'models/Product';

export enum ProductDetailActionTypes {
  LoadProductDetail = '[ProductID] Load Products',
  LoadIDProductDetailCompleted = '[ProductID] Load ProductID Completed',
  LoadIDProductDetailFailed = '[ProductID] Load ProductID Failed'
}

export class GetProduct implements Action {
  readonly type = ProductDetailActionTypes.LoadProductDetail;
}

export class GetProductCompleted implements Action {
  readonly type = ProductDetailActionTypes.LoadIDProductDetailCompleted;

  constructor(public  payLoad: IProduct) {
  }
}

export class GetProductFailed implements Action {
  readonly type = ProductDetailActionTypes.LoadIDProductDetailFailed;

}

export type ProductDetailsActions = GetProduct | GetProductCompleted | GetProductFailed;
