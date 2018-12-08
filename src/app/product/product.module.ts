import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductListItemComponent} from './components/product-list-item/product-list-item.component';
import {ProductDetailsComponent} from './components/product-details/product-details.component';
import {RecentlyViewedComponent} from './components/recently-viewed/recently-viewed.component';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {ProductListEffects} from './components/product-list/product-list.effects';
import {ProductDetailEffects} from './components/product-details/product.details.effects';
import {productReducers} from './index';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  /*path is dynamic id there is a colon*/
  {
    path: ':productId',
    component: ProductDetailsComponent
  }
];

@NgModule({
  declarations: [ProductListComponent, ProductListItemComponent, ProductDetailsComponent, RecentlyViewedComponent],
  imports: [
    CommonModule,
    HttpClientModule, /*require for http api call*/
    RouterModule.forChild(routes), StoreModule.forFeature('productStore', productReducers), EffectsModule.forFeature([ProductListEffects, ProductDetailEffects])
  ]
})
export class ProductModule {
}
