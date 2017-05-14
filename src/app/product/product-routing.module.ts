import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Customer } from '../customer/customer';
import { CustomerlistComponent } from '../customer/customerlist.component';
import { ProductService } from '../product.service';
import { CustomereditComponent } from '../customer/customeredit/customeredit.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
      { path: 'products', component: CustomerlistComponent },
      { path: 'customeredit/:id',component: CustomereditComponent}
     ])],
 
  exports: [RouterModule]
})
export class ProductRoutingModule { }
