import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../product.service';
import {IProduct} from '../../../models/Product';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productDetails: IProduct;

  constructor(private aRoute: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit() {
    const productId = this.aRoute.snapshot.paramMap.get('productId');
    this.productService.getProductById(productId).subscribe((product: IProduct) => {
      this.productDetails = product;
    });

  }

}
