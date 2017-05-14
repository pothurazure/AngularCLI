import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductService } from './product.service';
import { CustomerlistComponent } from './customer/customerlist.component';
import { ProductModule } from './product/product.module';
import { NguiUtilsModule } from './Shared/utils/utils.module';
import { NguiAutoCompleteModule } from './Shared/autocomplete/auto-complete.module';
import { CustomereditComponent } from './customer/customeredit/customeredit.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerlistComponent,
    CustomereditComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'welcome', component: CustomerComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule,
    NguiUtilsModule,
    NguiAutoCompleteModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
