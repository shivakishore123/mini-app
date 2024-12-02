import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllEmployeesService {
  constructor(private _httpClient:HttpClient) { }


  getemployees():Observable<any>{
    return this._httpClient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees")
  }
  
  deleteemployee(id:string):Observable<any>{
    return this._httpClient.delete("https://6572df5d192318b7db412dfe.mockapi.io/employees/"+id);
  }

  getfilteredemployee(term:string):Observable<any>{
    return this._httpClient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees?filter="+term)
  }
  getpagedemployee(limit:number, page:number):Observable<any>{
    return this._httpClient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees?limit="+limit+"&page="+page);
  }
  getsortedemployee(column:string, order:string):Observable<any>{
    return this._httpClient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees?sortBy="+column+"&order="+order);
  }
    createemployees(data:any):Observable<any>{
      return this._httpClient.post("https://6572df5d192318b7db412dfe.mockapi.io/employees",data);
    }
  
}
