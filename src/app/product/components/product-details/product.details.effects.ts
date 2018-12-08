import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {IProduct} from 'models/Product';
import {of} from 'rxjs';
import {Injectable} from '@angular/core';
import {ProductService} from '../../product.service';
import {GetProductCompleted, GetProductFailed, ProductDetailActionTypes} from './product-details.actions';
import {getProductId} from './product-details.selector';

@Injectable()
export class ProductDetailEffects {

  constructor(private actions$: Actions,
              private productService: ProductService,
              private store: Store<any>) {
  }

  @Effect()
  product = this.actions$.pipe(
    ofType(ProductDetailActionTypes.LoadProductDetail),
    switchMap(() => this.store.pipe(select(getProductId))),
    switchMap((productId) => this.productService.getProductById(productId)),
    map((product: IProduct) => new GetProductCompleted(product)),
    catchError(() => of(new GetProductFailed())));

}
