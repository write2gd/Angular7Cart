import {IProduct} from 'models/Product';
import {ProductActionTypes, ProductListActions} from './product-list.actions';

export interface ProductState {
  list: IProduct[];
  loading: boolean;
}

export const initialState: ProductState = {
  list: [],
  loading: false
};

export function reducer(state = initialState, action: ProductListActions): ProductState {
  switch (action.type) {
    case ProductActionTypes.LoadProducts:
      return {
        /* this ... operatoe is used to create a new instance*/
        ...state, loading: true
      };
    case ProductActionTypes.LoadProductsFailed:
      return {
        ...state, loading: false
      };
    case ProductActionTypes.LoadProductsCompleted:
      return {
        ...state, loading: false, list: action.payLoad
      };

    default:
      return state;
  }
}
