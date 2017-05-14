import { Component, OnInit } from '@angular/core';

import { Customer } from './customer';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;
    products: Customer[];
  constructor(
  private productService: ProductService,
  private router: Router) { }
    ngOnInit(): void {
      console.log("customer list ngonit")
        this.productService.getCustomers()
                .subscribe(products => this.products = products,
                           error => this.errorMessage = <any>error);
    }
    /*
    onItemEditClick(id) {
      console.log("selected : "+id); 
       this.router.navigate(['/CustomereditComponent', id]);
    }
    */
}
