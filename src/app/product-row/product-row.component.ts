import { Component } from '@angular/core';
import { Product } from '../app.component';

@Component({
  selector: 'product-row',
  inputs: ['product'],
  host: {'class': 'item'},
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent {

  product: Product;

  constructor() { }

}

@Component({
  selector: 'product-image',
  inputs: ['product'],
  host: {'class': 'ui small image'},
  template: `<img class="product-image" [src]="product.image">`
})
export class ProductImage {
  product: Product;
  constructor() { }
}
