import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IProduct} from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  public getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('http://5c02031dd526f90013472303.mockapi.io/products');
  }
}
