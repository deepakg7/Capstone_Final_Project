import { Component, OnInit } from '@angular/core';
import { Property } from '../add-property/Property';
import { PropertyServiceService } from '../service/property-service.service';
import { HttpClient } from '@angular/common/http';
import { AgentServiceService } from '../service/agent-service.service';

@Component({
  selector: 'app-view-catalogue',
  templateUrl: './view-catalogue.component.html',
  styleUrls: ['./view-catalogue.component.css']
})
export class ViewCatalogueComponent implements OnInit {
  property:any[]=[];
  filteredProperties: any[];
  searchValue: string ='';
  photos: any[]=[];
  constructor(private propertyService:PropertyServiceService,private http: HttpClient, private agentService:AgentServiceService) {
    this.filteredProperties = this.property;
  }
  ngOnInit(): void {
    this.getPhotos();
    this.propertyService.getAllProperties().subscribe(
      (response:any)=>{
        this.property = response;
        console.log(this.property);
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
      this.filteredProperties = this.property.filter(data =>
        data.bedroom.toString().includes(this.searchValue) ||
        data.bathroom.toString().includes(this.searchValue) ||
        data.desc.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        data.category.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        data.year_build.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        data.location.toLowerCase().includes(this.searchValue.toLowerCase())||
        data.agentName.toLowerCase().includes(this.searchValue.toLowerCase())||
        data.buy.toString().includes(this.searchValue) ||
        data.rent.toString().includes(this.searchValue) ||
        data.parking.toString().includes(this.searchValue)
        
      );
    } else {
      this.filteredProperties = this.property;
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
  getPhotos() {
    this.http.get<any[]>('http://localhost:8088/carousel/photos/getAllPhotos')
      .subscribe(
        (response:any) => {
          this.photos = response;
        },
        (error:any) => {
          console.error('Failed to fetch photos');
          // Handle error response
        }
      );
  }

}
