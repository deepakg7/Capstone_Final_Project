import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from '../add-property/Property';
import { PropertyServiceService } from '../service/property-service.service';
import { AgentServiceService } from '../service/agent-service.service';

@Component({
  selector: 'app-delete-property',
  templateUrl: './delete-property.component.html',
  styleUrls: ['./delete-property.component.css']
})
export class DeletePropertyComponent implements OnInit {
  
  filteredProperties: any[];
  searchValue: string ='';
  property:Property[]=[];

  constructor(private router: Router,private propertyService:PropertyServiceService, private agentService:AgentServiceService) {
    this.filteredProperties = this.property;
  }
  ngOnInit(): void {
    this.propertyService.getAllProperties().subscribe(
      (response:any)=>{
        this.property = response;
        for(let i of this.property){
          this.agentService.getAgentById(i.agentName).subscribe(
            (response:any)=>{
              i.agentName = response.agentName;
            },(err:any)=>{
              console.log("Error while assigning: "+err);
            }
          )
        }
        this.filteredProperties = this.property;
      },
      err=>{
        console.log("Error Occurred!! "+err);
      }
    );
  }

  search(): void {
    if (this.searchValue) {
      this.filteredProperties = this.property.filter(property =>
        property.property_id.toString().includes(this.searchValue) ||
        property.property_name.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        property.agentName.toLowerCase().includes(this.searchValue.toLowerCase())||
        property.category.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        property.bedroom.toString().includes(this.searchValue.toLowerCase())
      );
    } else {
      this.filteredProperties = this.property;
    }
  }
  routeToupdate(PropertyID: any): void {
    console.log(PropertyID);
    this.router.navigate(["admin/update-property",PropertyID]);
  }
}
