import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {LoadProductsCompleted, LoadProductsFailed, ProductActionTypes} from './product-list.actions';
import {ProductService} from './product.service';
import {catchError, map, switchMap} from 'rxjs/operators';
import {IProduct} from 'models/Product';
import {of} from 'rxjs';


@Injectable()
export class ProductListEffects {

  constructor(private actions$: Actions, private productService: ProductService) {
  }

  @Effect()
  products = this.actions$.pipe(
    ofType(ProductActionTypes.LoadProducts),
    switchMap(() => this.productService.getProducts()),
    map((products: IProduct[]) => new LoadProductsCompleted(products)),
    catchError(() => of(new LoadProductsFailed())));
}
