import { Injectable, Optional } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

/**
 * provides auto-complete related utility functions
 */
@Injectable()
export class NguiAutoComplete {

  public source: string;
  public pathToData: string;
  public listFormatter: (arg: any) => string;

  constructor(@Optional() private http: Http) {
    // ...
  }

  filter(list: any[], keyword: string, matchFormatted: boolean) {
    return list.filter(
      el => {
        let objStr = matchFormatted ? this.getFormattedListItem(el).toLowerCase() : JSON.stringify(el).toLowerCase();
        keyword = keyword.toLowerCase();
        return objStr.indexOf(keyword) !== -1;
      }
    );
  }

   GetUserId(data: any): Observable<Response>{
     console.log("GetUserId");
     console.log(data);
    /// change this prefix according to the environment. 
    /// In below sample, windows authentication is considered.
    let prefix = "i: 0#.f|membership|";
    /// get the site url
    let siteUrl =  "/sites/TestDev1";
    /// add prefix, this needs to be changed based on scenario
    //let accountName = prefix + data;
    let accountName = data;
    console.log(accountName);
    accountName = encodeURIComponent(accountName);
    console.log(accountName);
    console.log("data");
   // let userUrl = siteUrl+"/_api/web/siteusers(@v)?@v='"+ accountName +"'";
   let userUrl= siteUrl+"/_api/web/siteusers?$select=Id,Title,LoginName,Email&$filter=Title eq '"+accountName+"'";
    console.log(userUrl);
    
    let headers = new Headers({ 'Accept': 'application/json;odata=verbose' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(userUrl, options)
                    .map(this.extractData)
                    //.do(data => console.log(data))
                    .catch(this.handleError);
   }
   private extractData(response: Response) {
        console.log(response);
        let data = response.json();
        console.log("Body");
        console.log(data);
        console.log(data.d.results[0].Id);
        return data.d.results[0].Id || {};
    }

    private handleError(error: Response): Observable<any> {
        console.log("error");
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

  getFormattedListItem(data: any) {
    let formatted;
    let formatter = this.listFormatter || '(id) value';
    if (typeof formatter === 'function') {
      formatted = formatter.apply(this, [data]);
    } else if (typeof data !== 'object') {
      formatted = data;
    } else if (typeof formatter === 'string') {
      formatted = formatter;
      let matches = formatter.match(/[a-zA-Z0-9_\$]+/g);
      if (matches && typeof data !== 'string') {
        matches.forEach(key => {
          formatted = formatted.replace(key, data[key]);
        });
      }
    }
    return formatted;
  }

  /**
   * return remote data from the given source and options, and data path
   */
  getRemoteData(keyword: string): Observable<Response> {
    if (typeof this.source !== 'string') {
      throw "Invalid type of source, must be a string. e.g. http://www.google.com?q=:my_keyword";
    } else if (!this.http) {
      throw "Http is required.";
    }
   
    /*
    let matches = this.source.match(/:[a-zA-Z_]+/);
    if (matches === null) {
      throw "Replacement word is missing.";
    }

    let replacementWord = matches[0];
    let url = this.source.replace(replacementWord, keyword);
    return this.http.get(url)
      .map(resp => resp.json())
      .map(resp => {
        let list = resp.data || resp;
        console.log(resp);
        if (this.pathToData) {
          let paths = this.pathToData.split(".");
          paths.forEach(prop => list = list[prop]);
        }

        return list;
      });
      
     */
    
    let url = this.source;
    let currentrequestdigest=(<HTMLInputElement>document.getElementById('__REQUESTDIGEST')).value;
    let headers = new Headers({ "accept": "application/json;odata=verbose",
            "X-RequestDigest": currentrequestdigest,
            "content-Type": "application/json;odata=verbose",
            });
     let data = JSON.stringify({
            'queryParams':{
                '__metadata':{
                    'type':'SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters'
                },
                'AllowEmailAddresses':true,
                'AllowMultipleEntities':false,
                'AllUrlZones':false,
                'MaximumEntitySuggestions':50,
                'PrincipalSource':15,
                'PrincipalType': 15,
                'QueryString':keyword
                //'Required':false,
                //'SharePointGroupID':null,
                //'UrlZone':null,
                //'UrlZoneSpecified':false,
                //'Web':null,
                //'WebApplicationID':null
            }
        });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, data, options)
      .map(resp => resp.json())
      .map(resp => {
        let list = JSON.parse(resp.d.ClientPeoplePickerSearchUser) || resp;
        console.log(resp);
        /*  
        console.log(this.pathToData);
        if(this.pathToData) {
          let paths = this.pathToData.split(".");
           console.log(paths);
          paths.forEach(prop => list = list[prop]);
        }
       */
        console.log(list);
        return list;
      });

      /* end */
  }
  
}

