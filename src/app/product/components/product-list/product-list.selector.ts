import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ProductState} from './product-list.reducer';
import {IProduct} from 'models/Product';
import {ProductModuleState} from '../../index';

const getProductState = createFeatureSelector<ProductModuleState>('productStore');
export const getAllProducts = createSelector(
  getProductState, (state: ProductModuleState) => state.products.list ? state.products.list : []
);
export const getExtraProducts = createSelector(
  getAllProducts, (products: IProduct[]) => {
    products.forEach(p => {
      p.name = p.name + '- GD';
    });
    return products;
  }
);
