import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Customer } from './customer';
import { ProductService } from '../product.service';

import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { ViewEncapsulation } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
/*
let templateStr: string = `
      
  <fieldset><legend><h2>Source as HTTP URI String</h2></legend>
    <ngui-utils-4>
      <input  ngui-auto-complete
        id="model4"
        [(ngModel)]="model4"
        placeholder="Enter Address(min. 2 chars)"
        [source]="googleGeoCode" 
        no-match-found-text="No Match Found"
        list-formatter="formatted_address"
        path-to-data="results"
        loading-text="Google Is Thinking..."
        max-num-list="5"
        min-chars="2" />
      <br/>selected model4: {{model4 | json}}<br/><br/>
    </ngui-utils-4>
    <pre>{{templateStr | htmlCode:'ngui-utils-4'}}</pre>
    <pre> source: {{googleGeoCode}}</pre>
  </fieldset>
 `;
 */
@Component({
    selector: 'my-signup',
   // template: templateStr,
    templateUrl: './customer.component.html'
   
})
export class CustomerComponent {
    constructor(
         public http: Http,
         private productService: ProductService,
         private _sanitizer: DomSanitizer
        ) {

    }
    //templateStr: any = templateStr;
    //googleGeoCode: string = "https://maps.googleapis.com/maps/api/geocode/json?address=:my_own_keyword";
    googleGeoCode: string = "/sites/TestDev1/_api/SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.clientPeoplePickerSearchUser";
    customer: Customer= new Customer();
    save(customerForm: NgForm) {
        let formdata=customerForm.value;
        this.productService.updatePeoplePickerFields(formdata).then(response =>{
        console.log("end - updatePeoplePickerFields");
        console.log(formdata);
        console.log("done - updatePeoplePickerFields");
        var json_string = JSON.stringify(customerForm.value);
        var json_obj = JSON.parse(json_string);
        json_obj['__metadata'] = { "type": "SP.Data.HelloListListItem" };
        json_string = JSON.stringify( json_obj );
        console.log( json_string );
        this.productService.createCustomer(json_string)
        .subscribe(products =>  this.productService.getCustomers(),
                           error => console.log('testing error createCustomers: '));
                         
        });                
    }
 }