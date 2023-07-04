import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agent } from '../add-agent/Agent';
import { AgentServiceService } from '../service/agent-service.service';

@Component({
  selector: 'app-delete-agent',
  templateUrl: './delete-agent.component.html',
  styleUrls: ['./delete-agent.component.css']
})
export class DeleteAgentComponent implements OnInit{

  filteredProperties: any[];
  agent:Agent[]=[];
  searchValue: string ='';
  isDelete = false;
  valueDelete:String = '';

  constructor(private router: Router,private agentService:AgentServiceService) {
    this.filteredProperties = this.agent;
  }
  ngOnInit(): void {
    this.agentService.getAllAgents().subscribe(
      (response:any)=>{
        this.agent = response;
        this.filteredProperties = this.agent;
      },
      err=>{
        console.log("Error Occurred!! "+err);
      }
    );
  }

  deleteAgent(aId:String){
    this.agentService.deleteAgent(aId).subscribe(
      (response:any)=>{
        this.agent = response;
        this.filteredProperties = this.agent;
        this.isDelete = true;
        this.valueDelete = aId;
        this.router.navigate(['admin/view-agent'], { replaceUrl: true });
      },
      err=>{
        console.log("Error Occurred!! "+err);
      }
    );
  }



  search(): void {
    if (this.searchValue) {
        console.log(this.agent[0].agentName);
        this.filteredProperties = this.agent.filter(agent =>
          agent.agentId.toString().includes(this.searchValue) ||
          agent.agentName.toLowerCase().includes(this.searchValue.toLowerCase()) ||
          agent.agentEmail.toLowerCase().includes(this.searchValue.toLowerCase())
      );
      console.log(this.filteredProperties);
    } else {
      this.filteredProperties = this.agent;
    }
  }
  routeToupdate(agentID: any): void {
    console.log(agentID);
    this.router.navigate(["admin/update-agent",agentID]);
  }
}
