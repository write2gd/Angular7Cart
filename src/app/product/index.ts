
import * as fromProduct from './components/product-list/product-list.reducer';
import * as fromProductDetail from './components/product-details/product-details.reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface ProductModuleState {
  products: fromProduct.ProductState;
  productDetail: fromProductDetail.ProductDetailState;
}

export const productReducers: ActionReducerMap<ProductModuleState> = {
  products: fromProduct.reducer,
  productDetail: fromProductDetail.reducer
};
