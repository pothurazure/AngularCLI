import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toPromise';
import { Customer } from './customer/customer';
@Injectable()
export class ProductService {
  private customerUrl = '/sites/TestDev1/_api/web/lists/GetByTitle('+"'HelloList'"+')/items';
  public userNameID:any;
  public form:any;
  public formproperty:any;
  public BAR=JSON.stringify({"FirstName":"test1","LastName":"test1","Email":"test1@test.com","__metadata":{"type":"SP.Data.HelloListListItem"}});
  constructor(private http: Http) { }
 
 updateCustomer(customerInfo: any,ID: number): Observable<Customer> {
    let itemURL = this.customerUrl+"("+ID+")";
    console.log(itemURL);
    console.log(customerInfo);
    console.log(ID);
    let currentrequestdigest=(<HTMLInputElement>document.getElementById('__REQUESTDIGEST')).value;
    let headers = new Headers({ 
            "accept": "application/json;odata=verbose",
            "X-RequestDigest": currentrequestdigest,
            "content-Type": "application/json;odata=verbose",
            "If-Match": "*"
            });
    let options = new RequestOptions({ headers: headers });
    return this.http.patch(itemURL, customerInfo , options)
                    .map(this.extractData)
                    .do(data => console.log("Item Updated!!"))
                    .catch(this.handleError);
    
  }
  getCustomers(): Observable<Customer[]> {
    let headers = new Headers({ 'Accept': 'application/json;odata=verbose' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.customerUrl, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getCustomerbyId(id: number): Promise<any> {
    let headers = new Headers({ 'Accept': 'application/json;odata=verbose' });
    let options = new RequestOptions({ headers: headers });
    let itemURL = this.customerUrl+"("+id+")";
    return this.http.get(itemURL, options)
                    .toPromise()
                    .then(this.extractEditItemData)
                    .catch(this.handleError);
  }
  
  private extractEditItemData(response: Response) {
        console.log(response.json());
        let data = response.json();
        return data.d || {};
  }

  updatePeoplePickerFields(formData: any): Promise<any>{
    let promises_array:Array<any> =[];
    let listOfPeoplPckrFields=["UserNameId","UserName01Id","UserName02Id"];
    var keys = Object.keys(formData);
    for (var i = 0; i < keys.length; i++) {
            if(listOfPeoplPckrFields.includes(keys[i]))
            {
               var prop = keys[i];
               var val = formData[keys[i]];
               let p1=this.GetUserId(formData,prop,formData[keys[i]]);
               promises_array.push(p1);
            }
        }
        return Promise.all(promises_array);
  }
  GetUserId(form: any,property:any,userid: any): Promise<any>  {
    let formData=form;
    let formproperty=property;
    let siteUrl =  "/sites/TestDev1";
    let accountName = userid;
    accountName = encodeURIComponent(accountName);
    let userUrl= siteUrl+"/_api/web/siteusers?$select=Id,Title,LoginName,Email&$filter=Title eq '"+accountName+"'";
    let headers = new Headers({ 'Accept': 'application/json;odata=verbose' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(userUrl, options)
               .toPromise()
               .then((response) => {
                let data = response.json();
                console.log(data);
                formData[formproperty]=Number(data.d.results[0].Id);
                return Promise.resolve(formData);
               })
               .catch(this.handleError);
   }

  private extractUserId(response: Response) {
        let data = response.json();
        return Promise.resolve();
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
        console.log(response.json());
        let data = response.json();
        return data.d.results || {};
  }

  private handleError(error: Response): Observable<any> {
        return Observable.throw(error.json().error || 'Server error');
  }
}

