import { Component, OnInit } from '@angular/core';
import { Property } from '../add-property/Property';
import { PropertyServiceService } from '../service/property-service.service';

@Component({
  selector: 'app-add-highlight-property',
  templateUrl: './add-highlight-property.component.html',
  styleUrls: ['./add-highlight-property.component.css']
})
export class AddHighlightPropertyComponent implements OnInit {
  panelOpenState = false;
  showRemove = "true";
  showRemoveexists = "false";
  showAdd = "false";
  showAddexists = "true";
  property:Property[]=[];
  constructor(private propertyService:PropertyServiceService){

  }
  ngOnInit(): void {
    this.propertyService.getAllProperties().subscribe(
      (response:any)=>{
        this.property = response;
        console.log(this.property);
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
