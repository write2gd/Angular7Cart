import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ProductModuleState} from '../../index';

const getRouterState = (state) => state.globalRoute;
const getProductDetailState = createFeatureSelector<ProductModuleState>('productStore');

export const getProductId = createSelector(getRouterState, routeDetails => {
    return routeDetails.state.params.productId;
  }
);

export const getProduct = createSelector(
  getProductDetailState, (state: ProductModuleState) => {
    return state.productDetail.product ? state.productDetail.product : {};
  }
);
