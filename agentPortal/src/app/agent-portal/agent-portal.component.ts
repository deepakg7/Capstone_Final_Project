import { Component, OnInit } from '@angular/core';
import { Agent } from '../Agent';
import { AgentService } from '../service/agent.service';
import { PropertyService } from '../service/property.service';
import { Property } from '../Property';
import { ScheduleService } from '../service/schedule.service';
import { Schedule } from '../Schedule';

@Component({
  selector: 'app-agent-portal',
  templateUrl: './agent-portal.component.html',
  styleUrls: ['./agent-portal.component.css']
})
export class AgentPortalComponent implements OnInit {
  title = 'AgentPortal';
  agent:Agent=new Agent();
  property:any[]=[];
  agentName:string='';
  schedule:any[]=[];
  constructor(private agentService:AgentService,private propertyService:PropertyService, private scheduleService:ScheduleService){}
  ngOnInit(): void {
    this.agentService.getAgentById("649ecce9bb49791ad6042d06").subscribe(
      (response:any)=>{
        this.agent = response;
        console.log("response:")
        console.log(response);
        this.agentName = this.agent.agentName;
        console.log(this.agentName);
        if(this.agentName !=null){
          this.propertyService.getAllProperties("649ecce9bb49791ad6042d06").subscribe(
            (response:any)=>{
              this.property = response;
              console.log(this.property);

              for(let prop of this.property){
                this.scheduleService.getByProperty(prop.property_id).subscribe(
                  (response:any)=>{
                    if(response.length != 0){
                      this.schedule.push(response);
                      console.log(this.schedule[0][0].cName);
                    }
                    
                  },(err:any)=>{
                    console.log(err);
                  }
                );
                }
            },
            err=>{
              console.log("Error Occurred!! "+err);
            }
          );}
      },
      err=>{
        console.log("Error Occurred!! "+err);
      }
    );
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
