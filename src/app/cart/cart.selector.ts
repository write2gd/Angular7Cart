import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CartState} from './cart.reducer';
import {getAllProducts} from '../product/product-list.selector';
import {IProduct} from 'models/Product';
import {ICartItem} from 'models/cartItem';

const getCartState = createFeatureSelector<CartState>('cartStore');
const getCartList = createSelector(getCartState, (cart: CartState) => cart.list);
export const getAllCartItems = createSelector(getCartList, getAllProducts, (cartList: ICartItem[], products: IProduct[]) => {
  return cartList.map((cart: ICartItem) => {
    const productDetails = products.find((product: IProduct) => product.id === cart.productId);
    return {...cart, product: productDetails};
  });
});
export const getItemCounter = createSelector(getCartList, (cartList: ICartItem[]) => cartList.length);

