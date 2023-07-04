import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consult } from '../view-consultation/Consult';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultServiceService {

  private apiUrl = 'http://localhost:8089/consult/';
  constructor(private http: HttpClient) { }
  getAllConsultation():Observable<Consult>{
    const url = `${this.apiUrl}getAllConsult`;
    console.log("url: "+url);
    return this.http.get<any>(url);
  }

  deleteConsultation(cID:string):Observable<Consult>{
    const url = `${this.apiUrl}getAllConsult/${cID}`;
    console.log("url: "+url);
    return this.http.delete<any>(url);
  }
}
