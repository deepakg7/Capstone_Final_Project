import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PropertyServiceService } from '../service/property-service.service';
import { Property } from './Property';
import { Router } from '@angular/router';
import { AgentServiceService } from '../service/agent-service.service';
import { Agent } from '../add-agent/Agent';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit{
   panelOpenState = false;
   property:Property[]=[];
   agent:Agent[]=[];
   AddPropertyForm:FormGroup;

  constructor(private propertyService:PropertyServiceService,private fb:FormBuilder, private router:Router,private agentService:AgentServiceService,private http: HttpClient){
    this.AddPropertyForm =  fb.group({
      property_name:['',Validators.compose([Validators.required,Validators.minLength(2)])],
      desc:['',Validators.compose([Validators.required,Validators.required,Validators.minLength(5)])],
      category:['',Validators.compose([Validators.required])],
      bedroom:[0,Validators.compose([Validators.required])],
      bathroom:[0,Validators.compose([Validators.required])],
      parking:[false,Validators.compose([Validators.required])],
      area:[0.0,Validators.compose([Validators.required])],
      year_build:['',Validators.compose([Validators.required])],
      location:['',Validators.compose([Validators.required])],
      agentName:['',Validators.compose([Validators.required])],
      buy:[false],
      rent:[false],
      buyPrice:[0.0],
      rentPrice:[0.0],
      image: ['',Validators.compose([Validators.required])],
      video: [''],
      balcony:[false], 
      deck: [false], 
      cableTV:[false], 
      pool:[false]
    });
  } 
  ngOnInit(): void {
    this.agentService.getAllAgents().subscribe(
      (response:any)=>{
          this.agent = response;
          console.log(this.agent);
      }
    )
  }
  addProperty(){
    console.log("form Values");
    console.log(this.AddPropertyForm.value);
    const propertyData = new FormData();
    propertyData.append('property_name', this.AddPropertyForm.value.property_name);
    propertyData.append('desc', this.AddPropertyForm.value.desc);
    propertyData.append('category', this.AddPropertyForm.value.category);
    propertyData.append('bedroom', String(this.AddPropertyForm.value.bedroom));
    propertyData.append('bathroom', String(this.AddPropertyForm.value.bathroom));
    propertyData.append('parking', String(this.AddPropertyForm.value.parking));
    propertyData.append('area', String(this.AddPropertyForm.value.area));
    propertyData.append('year_build', this.AddPropertyForm.value.year_build);
    propertyData.append('location', this.AddPropertyForm.value.location);
    propertyData.append('agentName', this.AddPropertyForm.value.agentName);
    propertyData.append('buy', String(this.AddPropertyForm.value.buy));
    propertyData.append('rent', String(this.AddPropertyForm.value.rent));
    propertyData.append('buyPrice', String(this.AddPropertyForm.value.buyPrice));
    propertyData.append('rentPrice', String(this.AddPropertyForm.value.rentPrice));
    propertyData.append('balcony', String(this.AddPropertyForm.value.balcony));
    propertyData.append('deck', String(this.AddPropertyForm.value.deck));
    propertyData.append('cableTV', String(this.AddPropertyForm.value.cableTV));
    propertyData.append('pool', String(this.AddPropertyForm.value.pool));
    propertyData.append('video', this.AddPropertyForm.value.video);
    propertyData.append('image', this.AddPropertyForm.value.image);




    this.propertyService.addProperty(propertyData).subscribe(
      (response:any)=>{
        this.property = response;
        console.log(this.property);
        console.log(this.AddPropertyForm.value);
        console.log(this.property);
        this.router.navigate(["admin/view-catalogue"]);
      },
      err=>{
        console.log("Error Occurred!! "+err);
        this.router.navigate(["admin/view-catalogue"]);
      }
    );
  }
  // @RequestParam("property_name") String property_name, 
  // @RequestParam("desc") String desc, 
  // @RequestParam("category") String category, 
  // @RequestParam("bedroom") int bedroom,
  // @RequestParam("bathroom") int bathroom, 
  // @RequestParam("parking") boolean parking, 
  // @RequestParam("area") int area, 
  // @RequestParam("year_build") String year_build, 
  // @RequestParam("location") String location,
  // @RequestParam("agent_Name") String agent_Name,
  //  @RequestParam("buy") boolean buy, 
  //  @RequestParam("rent") boolean rent,
  //  @RequestParam("buyPrice") double buyPrice,
  //  @RequestParam("rentPrice") double rentPrice,
  //  @RequestParam("balcony") boolean balcony,
  //  @RequestParam("deck") boolean deck,
  //  @RequestParam("cableTV") boolean cableTV,
  //  @RequestParam("pool") boolean pool,
  //  @RequestParam("video") String video, 
  //  @RequestParam("image") List<MultipartFile> images

  onFileSelected(event:any) {
    console.log("image uoload");
    this.AddPropertyForm.patchValue({ image: event.target.files[0]});
  }
  
}
