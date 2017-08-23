import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductRoutingModule } from "./product-routing.module";
import { ProductParamComponent } from './product-param/product-param.component';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  declarations: [ProductComponent, ProductsComponent, ProductDetailComponent, ProductParamComponent]
})
export class ProductModule { }
