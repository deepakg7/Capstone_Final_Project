import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from '../add-property/Property';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PropertyServiceService {
  private apiUrl = 'http://localhost:8085/admin/';
  constructor(private http: HttpClient) { }

  getAllProperties():Observable<Property[]>{
    const url = `${this.apiUrl}getAllProperty`;
    console.log("url: "+url);
    return this.http.get<any>(url);
  }

  getPropertyById(aId:String):Observable<Property[]>{
    const url = `${this.apiUrl}getPropertybyid/${aId}`;
    console.log("url: "+url);
    return this.http.get<any>(url);
  }

  addProperty(myForm:FormData):Observable<Property[]>{
    console.log(myForm);
    const url = `${this.apiUrl}addProperty`;
    return this.http.post<Property[]>(url, myForm);
  }

  UpdateProperty(myForm:FormData, propertyID:String):Observable<Property[]>{
    const url = `${this.apiUrl}updateProperty/${propertyID}`;
    console.log("url: "+url);
    return this.http.put<Property[]>(url, myForm);
  }

  deleteProperty(agentID:String):Observable<Property[]>{
    const url = `${this.apiUrl}delPropertybyid/${agentID}`;
    console.log("url: "+url);
    return this.http.delete<Property[]>(url);
  }
}
