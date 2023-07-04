import { Component, OnInit } from '@angular/core';
import { Agent } from '../add-agent/Agent';
import { AgentServiceService } from '../service/agent-service.service';

@Component({
  selector: 'app-view-agent',
  templateUrl: './view-agent.component.html',
  styleUrls: ['./view-agent.component.css']
})
export class ViewAgentComponent implements OnInit {
  agent:Agent[]=[];

  filteredProperties: any[];
  searchValue: string ='';

  constructor(private agentService:AgentServiceService) {
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

  getImageSource(image: any): string {
    const imageType = image.type;
    const imageData = image.data;
    let imageFormat = 'jpeg';
    if (imageType === 1) {
      imageFormat = 'png';
    }

    return `data:image/${imageFormat};base64,${imageData}`;
  }
}
