import {IProduct} from 'models/Product';

export interface ICartItem {
  productId: number;
  quantity: number;
  product?: IProduct;
}

