import { ProductParamComponent } from './product-param/product-param.component';
import { ProductComponent } from './product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { CanActivateProductService } from './can-activate-product.service';

const productRoutes: Routes = [
  {
    path: 'product',
    component: ProductComponent,
    children: [
      {
        path: '',
        component: ProductsComponent,
        pathMatch: 'full'
      },
      {
        path: ':id',
        component: ProductDetailComponent
      },
      {
        path: 'param/:id',
        component: ProductParamComponent,
        canActivate: [CanActivateProductService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
