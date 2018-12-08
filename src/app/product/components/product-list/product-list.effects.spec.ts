import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ProductListEffects } from './product-list.effects';

describe('ProductListEffects', () => {
  let actions$: Observable<any>;
  let effects: ProductListEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductListEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ProductListEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
