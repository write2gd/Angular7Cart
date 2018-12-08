import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ProductModuleState} from '../../index';

const getRouterState = (state) => state.globalRoute;
const getProductDetailState = createFeatureSelector<ProductModuleState>('productStore');

export const getProductId = createSelector(getRouterState, routeDetails => {
    console.log('Id from router' + routeDetails.state.params.productId);
    return routeDetails.state.params.productId;
  }
);

export const getProduct = createSelector(
  getProductDetailState, (state: ProductModuleState) => {
    console.log('Product from selector' + JSON.stringify(state.productDetail));
    return state.productDetail ? state.productDetail : {};
  }
);
