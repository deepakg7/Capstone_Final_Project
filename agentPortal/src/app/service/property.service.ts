import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from '../Property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private apiUrl = 'http://localhost:8085/api/property/';
  constructor(private http: HttpClient) { }
  getAllProperties(agentName:string):Observable<Property[]>{
    console.log("agent Name: "+agentName);
    const url = `${this.apiUrl}getPropertiesByAgentName/${agentName}`;
    console.log("url: "+url);
    return this.http.get<any>(url);
  }
}
