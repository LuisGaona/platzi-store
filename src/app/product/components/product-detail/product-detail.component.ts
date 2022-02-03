import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {ProductsService} from '../../../core/services/products/products.service';
import {Product} from '../../../core/models/product.model';
import { ɵAnimationGroupPlayer } from '@angular/animations';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product:Product;
  constructor(  
    private route:ActivatedRoute,
    private productsService:ProductsService
    ) { 
  
  }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      const id=params.id;
     this.fetchProduct(id);
      // this.product=this.productService.getProduct(id);
    });
   
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id)
    .subscribe(product => {
      this.product = product;
    });
  }
createProduct(){
  const newProduct: Product={
    id:'2',
    title: 'nuevo product angular',
    image:'assets/images/banner-1.jpg',
    price: 300,
    description: 'nuevo product para el servicio de angular'
  };
  this.productsService.createProduct(newProduct)
  .subscribe(product=>{
   console.log(product);
  });
}
updateProduct(){
  const updateProduct: Partial<Product>={
    title: 'pisos y azulejos',
    price: 400
  };
  this.productsService.updateProduct('2',updateProduct)
  .subscribe(product=>{
   console.log(product);
  });
}
  deleteProduct() {
    this.productsService.deleteProduct('222')
    .subscribe(product=>{
     console.log(product);
    });
}
}
