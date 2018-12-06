import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ProductState} from './product.reducer';
import {IProduct} from 'models/Product';

const getProductState = createFeatureSelector<ProductState>('productStore');
const getTitle = (state) => state.common.title;
export const getAllProducts = createSelector(
  getProductState, (product: ProductState) => product ? product.list : []
);
export const getExtraProducts = createSelector(
  getAllProducts, (products: IProduct[]) => {
    products.forEach(p => {
      p.name = p.name + '- GD';
    });
    return products;
  }
);
