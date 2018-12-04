import {IProduct} from 'models/Product';
import {ProductActions, ProductActionTypes} from './product.actions';

export interface State {
  list: IProduct[];
  loading: boolean;
}

export const initialState: State = {
  list: [],
  loading: false
};

export function reducer(state = initialState, action: ProductActions): State {
  switch (action.type) {
    case ProductActionTypes.LoadProducts:
      return {
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
