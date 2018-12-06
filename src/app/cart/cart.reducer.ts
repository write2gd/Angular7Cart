import {Action} from '@ngrx/store';
import {ICartItem} from 'models/cartItem';
import {CartActions, CartActionTypes} from './cart.actions';


export interface CartState {
  list: ICartItem[];
}

export const initialState: CartState = {
  list: []
};

export function reducer(state = initialState, action: CartActions): CartState {
  switch (action.type) {
    case CartActionTypes.AddToCart: {
      return {
        ...state,
        list: [...state.list, action.payLoad]
      };
    }
    default:
      return state;
  }
}
