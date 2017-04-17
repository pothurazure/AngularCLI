import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { Customer } from './customer/customer';
@Injectable()
export class ProductService {
  private customerUrl = '/sites/TestDev1/_api/web/lists/GetByTitle('+"'HelloList'"+')/items';
  public BAR=JSON.stringify({"FirstName":"test1","LastName":"test1","Email":"test1@test.com","__metadata":{"type":"SP.Data.HelloListListItem"}});
  constructor(private http: Http) { }
  getCustomers(): Observable<Customer[]> {
    let headers = new Headers({ 'Accept': 'application/json;odata=verbose' });
    let options = new RequestOptions({ headers: headers });
   return this.http.get(this.customerUrl, options)
                    .map(this.extractData)
                    //.do(data => data)
                    .catch(this.handleError);
  }
  createCustomer(customerInfo: any): Observable<Customer> {
    let currentrequestdigest=(<HTMLInputElement>document.getElementById('__REQUESTDIGEST')).value;
    let headers = new Headers({ "accept": "application/json;odata=verbose",
            "X-RequestDigest": currentrequestdigest,
            "content-Type": "application/json;odata=verbose",
            });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.customerUrl, customerInfo , options)
                    .map(this.extractData)
                    .do(data => this.getCustomers())
                    .catch(this.handleError);
  }
  private extractData(response: Response) {
        let data = response.json();
        console.log("Body");
        console.log(data);
        return data.d.results || {};
    }

    private handleError(error: Response): Observable<any> {
        console.log("error");
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}

