import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductListItemComponent} from './components/product-list-item/product-list-item.component';
import {ProductDetailsComponent} from './components/product-details/product-details.component';
import {RecentlyViewedComponent} from './components/recently-viewed/recently-viewed.component';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import * as fromProduct from './product.reducer';
import {EffectsModule} from '@ngrx/effects';
import {ProductEffects} from './product.effects';

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
    RouterModule.forChild(routes), StoreModule.forFeature('productStore', fromProduct.reducer), EffectsModule.forFeature([ProductEffects])
  ]
})
export class ProductModule {
}
