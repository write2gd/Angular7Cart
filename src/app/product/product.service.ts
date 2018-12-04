import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IProduct} from '../models/Product';
import {ProductState} from './product.reducer';
import {Store} from '@ngrx/store';
import {LoadProducts, LoadProductsCompleted, LoadProductsFailed} from './product.actions';

/*This is to inject the service instace*/
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private store: Store<ProductState>) {
  }

  public getProducts(): void {
    this.store.dispatch(new LoadProducts());
    this.http.get<IProduct[]>('http://5c02031dd526f90013472303.mockapi.io/products').subscribe(products => {
      this.store.dispatch(new LoadProductsCompleted(products));
    }, () => {
      this.store.dispatch(new LoadProductsFailed());
    });
  }

  public getProductById(productId: string): Observable<IProduct> {
    return this.http.get<IProduct>('http://5c02031dd526f90013472303.mockapi.io/products/' + productId);
  }
}
