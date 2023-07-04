import { Component, OnInit } from '@angular/core';
import { PropertyServiceService } from '../service/property-service.service';
import { Property } from '../add-property/Property';
import { CarouselServiceService } from '../service/carousel-service.service';
import { Carousel } from './Carousel';
import { AgentServiceService } from '../service/agent-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-carousel',
  templateUrl: './add-carousel.component.html',
  styleUrls: ['./add-carousel.component.css']
})
export class AddCarouselComponent implements OnInit{
  
  property:any[]=[];
  Cproperty:any[]=[];
  panelOpenState = false;
  showRemove = "true";
  showRemoveexists = "false";
  showAdd = "false";
  showAddexists = "true";
  isCarouselFull=false;
  
  IDC:string='';
  image!: File;
  constructor(private propertyService:PropertyServiceService, private carouselService:CarouselServiceService, private http: HttpClient){

  }
  ngOnInit(): void {
    this.getData();
    
  }

  getData(){
    this.propertyService.getAllProperties().subscribe(
      (response:any)=>{
        this.property = response;
        console.log(response);
      },
      err=>{
        console.log("Error Occurred!! "+err);
      }
    );
    this.Cproperty=[];
    this.carouselService.getAllPhotos().subscribe(
      (response:any)=>{
        console.log("propertyID");
        console.log(response);
        this.IDC = response.propertyID;
        console.log("id: "+this.IDC);
        
      if(response.length != 0){
        for( let property of response){
          console.log("Property: "+property.propertyID);
            this.propertyService.getPropertyById(property.propertyID).subscribe(
              (response:any)=>{
                this.Cproperty.push(response);
                console.log("Cproperty");
                console.log(this.Cproperty);
              },
              err=>{
                console.log("Error Occurred!! "+err);
              }
            );
        }
      }else{
        this.AddToCarousel(this.property[0].property_id)
      }
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


  AddToCarousel(property_id:string){
    console.log("property ID: "+property_id);
    const isPropertyIdPresent = this.Cproperty.some(item => item.property_id === property_id);

      if (isPropertyIdPresent) {
        console.log('Property ID is already present in the array of Carousel.');
      } else {
        

    if(this.Cproperty.length <4){
    this.carouselService.addCarousel(property_id).subscribe(
      (response:any)=>{
        this.getData();
        console.log(this.property);
      },
      err=>{
        console.log("Error Occurred!! "+err);
      }
    );
    }else{
      this.isCarouselFull=true;
    }
  }
  }
  deleteCarousel(cid:string){
    if(this.Cproperty.length<4){
      this.isCarouselFull=false;
    }
    this.Cproperty = this.Cproperty.filter(property => property.property_id !== cid);
    this.carouselService.removeCarousel(cid).subscribe(
      (response:any)=>{
        console.log(response);
      },(err:any)=>{
        console.log("error "+err);
      }
    )
  }

}

