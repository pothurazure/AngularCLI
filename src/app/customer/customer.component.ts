import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Customer } from './customer';
import { ProductService } from '../product.service';

@Component({
    selector: 'my-signup',
    templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit  {
    constructor(private productService: ProductService) {

    }
    
    ngOnInit(): void {
        /*
       this.productService.getCustomers()
                .subscribe(products => console.log('testing getCustomers:'),
                           error => console.log('testing error getCustomers: '));
                           */
    }
    customer: Customer= new Customer();

    save(customerForm: NgForm) {
        var json_string = JSON.stringify(customerForm.value);
        var json_obj = JSON.parse(json_string);
        json_obj['__metadata'] = { "type": "SP.Data.HelloListListItem" };
        json_string = JSON.stringify( json_obj );
        console.log( json_string );
        this.productService.createCustomer(json_string)
        .subscribe(products =>  this.productService.getCustomers(),
                           error => console.log('testing error createCustomers: '));
                        
    }
 }