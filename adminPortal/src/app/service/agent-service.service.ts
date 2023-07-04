import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agent } from '../add-agent/Agent';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AgentServiceService {
  private apiUrl = 'http://localhost:8084/agent/';
  constructor(private http: HttpClient) { }

  getAllAgents():Observable<Agent[]>{
    const url = `${this.apiUrl}getAllAgents`;
    console.log("url: "+url);
    return this.http.get<any>(url);
  }
  getAgentById(aId:String):Observable<Agent[]>{
    const url = `${this.apiUrl}getAgentById/${aId}`;
    console.log("url: "+url);
    return this.http.get<any>(url);
  }

  getAgentByEmail(aEmail:String):Observable<Agent[]>{
    const url = `${this.apiUrl}getAllAgentByEmail/${aEmail}`;
    console.log("url: "+url);
    return this.http.get<any>(url);
  }


  addAgent(myForm:FormData):Observable<Agent[]>{
    const url = `${this.apiUrl}addAgent`;
    console.log("url: "+myForm);
    return this.http.post<Agent[]>(url, myForm);
  }
  UpdateAgent(myForm:FormData, agentID:String):Observable<Agent[]>{
    const url = `${this.apiUrl}updateAgent/${agentID}`;
    console.log("url: "+url);
    return this.http.put<Agent[]>(url, myForm);
  }

  deleteAgent(agentID:String):Observable<Agent[]>{
    const url = `${this.apiUrl}deleteAgent/${agentID}`;
    console.log("url: "+url);
    return this.http.delete<Agent[]>(url);
  }
}
