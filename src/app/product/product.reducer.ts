import {Action} from '@ngrx/store';
import {IProduct} from 'models/Product';


export interface State {
  list: IProduct[];
  loading: boolean;
}

export const initialState: State = {
  list: [],
  loading: false
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    default:
      return state;
  }
}
