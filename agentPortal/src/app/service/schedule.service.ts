import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private apiUrl = 'http://localhost:8084/tour/';
  constructor(private http: HttpClient) { }
  getByProperty(propertyId:string){
    const url = `${this.apiUrl}getByPropertyId/${propertyId}`;
    console.log("url: "+url);
    return this.http.get<any>(url);
  }
}
