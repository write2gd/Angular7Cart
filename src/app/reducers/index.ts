import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';

export interface State {
  globalRoute: RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  globalRoute: routerReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
