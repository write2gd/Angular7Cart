import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ProductState} from './product.reducer';

const getProductState = createFeatureSelector<ProductState>('productStore');
const getTitle = (state) => state.common.title;
export const getAllProducts = createSelector(
  getProductState, (product: ProductState) => product.list
);
