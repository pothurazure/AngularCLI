import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
//import { CustomerlistComponent } from '../customer/customerlist.component';
//import { ProductService } from '../product.service';
@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  declarations: [
     // CustomerlistComponent
     // CustomerComponent
    ],
  providers: [
     // ProductService
    ]
})
export class ProductModule { }
