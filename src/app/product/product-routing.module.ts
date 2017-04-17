import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Customer } from '../customer/customer';
import { CustomerlistComponent } from '../customer/customerlist.component';
import { ProductService } from '../product.service';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
      { path: 'products', component: CustomerlistComponent }
     // { path: 'product',component: CustomerComponent},
     ])],
 
  exports: [RouterModule]
})
export class ProductRoutingModule { }
