import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  products: Product[];

  constructor() {
    this.products = [
      new Product('Apple', 'iPhone 6S', 'Phone', 'AAX213', 35990, 'Apple iPhone 6S', '../../assets/img/iphone-6s-gold.jpg'),
      new Product('Apple', 'iPhone 6', 'Phone', 'FBN552', 30990, 'Apple iPhone 6', '../../assets/img/iphone-6-black.jpg'),
    ];
  }

  productWasSelected(product: Product): void {
    console.log('product clicked: ', product);
  }

}

export class Product {

  constructor(
    public manufacturer: string,
    public model: string,
    public category: string,
    public barcode: string,
    public price: number,
    public title?: string,
    public image?: string
  ) {

  }

}
