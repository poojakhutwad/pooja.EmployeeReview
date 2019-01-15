import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { IEmpReview } from './IEmpReview';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeReviewService {
  constructor(private httpClient:HttpClient) { }
  public _url:string = "https://my-json-server.typicode.com/poojakhutwad/emp/posts";

  public scope:any;

  public sharedData:any ={
    firstName:"",
    lastName:"",
    empTitle:""
  }

  setData(key: string, data: any) {
      debugger;
      this.sharedData[key] = JSON.stringify(data);
      debugger;
  }

  getDataByKey(key: string): string {
    return this.sharedData[key];
}


  
  public getScope(): any {
    console.log("=========>"+this.scope);
    return this.scope;
  }

  public setScope(scope: any): any {
    this.scope = scope;
  }
  

  SetDetails():Observable<IEmpReview> {
    debugger;
    return this.httpClient.post<IEmpReview>(this._url,
      {
        "FirstName": "Customer004",
        "LastName": "customer004@email.com",
        "EmpTitle": "0000252525"
    });
  }

  GetDetails():Observable<IEmpReview[]>
{
  return this.httpClient.get<IEmpReview[]>(this._url);
}



   
}
