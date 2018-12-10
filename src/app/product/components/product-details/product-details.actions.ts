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
    console.log(' Products Loading Success' + payLoad);
  }
}

export class GetProductFailed implements Action {
  readonly type = ProductDetailActionTypes.LoadIDProductDetailFailed;

  constructor(public error: string) {
    console.log(' Products Loading Failed' + error);
  }

}

export type ProductDetailsActions = GetProduct | GetProductCompleted | GetProductFailed;
