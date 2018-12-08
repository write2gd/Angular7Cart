import {IProduct} from 'models/Product';
import {ProductDetailActionTypes, ProductDetailsActions} from './product-details.actions';

export interface ProductDetailState {
  product: IProduct;
  loading: boolean;
}

export const initialProductState: ProductDetailState = {
  product: {
    category: '',
    description: '',
    id: 0,
    imageUrl: '',
    name: '',
    price: 0
  },
  loading: false
};

export function reducer(state = initialProductState, action: ProductDetailsActions): ProductDetailState {
  switch (action.type) {
    case ProductDetailActionTypes.LoadProductDetail:
      return {
        /* this ... operator is used to create a new instance*/
        ...state, loading: true
      };
    case ProductDetailActionTypes.LoadIDProductDetailFailed:
      return {
        ...state, loading: false
      };
    case ProductDetailActionTypes.LoadIDProductDetailCompleted:
      return {
        ...state, loading: false, product: action.payLoad
      };

    default:
      return state;
  }
}

