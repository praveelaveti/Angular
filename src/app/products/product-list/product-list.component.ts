import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../product';




@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  errorMessage: any;
  data:any;
 

  constructor(private _productService: ProductService) {
    }

    products : IProduct[] = [      
          
              ];

        
  ngOnInit() {
    this.products = this._productService.getProducts();
  

  }

}
