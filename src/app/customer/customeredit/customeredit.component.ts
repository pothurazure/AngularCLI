import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product.service';
import { Customer } from '../customer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customeredit',
  templateUrl: './customeredit.component.html',
  styleUrls: ['./customeredit.component.css']
})

export class CustomereditComponent implements OnInit {
  id: number;
  private sub: any;
  product: Customer[];
  errorMessage: string;
  heroForm: FormGroup;
  
  constructor(private route: ActivatedRoute,
  private productService: ProductService,
  private fb: FormBuilder,
  ) {
    this.createForm();
   }
  createForm() {
  this.heroForm = this.fb.group({
                          FirstName: [''],
                          LastName: [''],
                          Email: [''],
                          UserNameId: ['',Validators.nullValidator],
                          UserName01Id: ['',Validators.nullValidator],
                          UserName02Id: ['',Validators.nullValidator]
                        });
  }
  
  onSubmit(event: Event) {
    event.preventDefault();
    const formModel = this.heroForm.value;
    console.log(formModel);
    var json_string = JSON.stringify(formModel);
    var json_obj = JSON.parse(json_string);
    json_obj['__metadata'] = { "type": "SP.Data.HelloListListItem" };
    json_string = JSON.stringify( json_obj );
    console.log( json_string );
    this.productService.updateCustomer(json_string,this.id)
        .subscribe(products =>  console.log("completed"),
                           error => console.log('testing error updateCustomers'));
  }
  ngOnInit() {
     this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       console.log("customer list ngonit")
        this.productService.getCustomerbyId(this.id)
                .then(product => 
                    {
                      console.log(product);
                      this.product = product;
                      console.log(product.ID);
                      console.log(product.FirstName);
                      console.log(this.product);
                      this.heroForm.patchValue({
                        FirstName:product.FirstName,
                        LastName: product.LastName,
                        Email: product.Email,
                        UserNameId: product.UserNameId,
                        UserName01Id: product.UserName01Id,
                        UserName02Id: product.UserName02Id
                      });
                    },
                    error => this.errorMessage = <any>error);
       // In a real app: dispatch action to load the details here.
    });
  }
  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

