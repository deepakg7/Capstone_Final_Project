import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from '../add-property/Property';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PropertyServiceService } from '../service/property-service.service';
import { AgentServiceService } from '../service/agent-service.service';
import { Agent } from '../add-agent/Agent';

@Component({
  selector: 'app-update-property',
  templateUrl: './update-property.component.html',
  styleUrls: ['./update-property.component.css']
})
export class UpdatePropertyComponent implements OnInit{
  propertyID: string="";
  property: Property = new Property;
  panelOpenState = false;
  agentName: String='';
  isFormReady = false;
  agent:Agent[]=[];
  UpdatePropertyForm:FormGroup;
  constructor(private route: ActivatedRoute,private propertyService:PropertyServiceService,private fb:FormBuilder, private router:Router,private agentService:AgentServiceService) {
    this.UpdatePropertyForm =  fb.group({
      property_name:['',Validators.compose([Validators.maxLength(50),Validators.minLength(5)])],
      desc:['',Validators.compose([Validators.maxLength(10),Validators.minLength(5)])],
      category:['',Validators.compose([Validators.maxLength(100),Validators.minLength(5)])],
      bedroom:[0],
      bathroom:[0],
      parking:[false],
      area:[0],
      year_build:[''],
      location:[''],
      agentName:[''],
      buy:[false],
      rent:[false],
      buyPrice:[0],
      rentPrice:[0],
      image: [''],
      video: [''],
      balcony:[false], 
      deck: [false], 
      cableTV:[false], 
      pool:[false]
    });
   }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.propertyID = params['propertyID'];
    });

    this.agentService.getAllAgents().subscribe(
      (response:any)=>{
          this.agent = response;
          console.log(this.agent);
      }
    )
    console.log(this.propertyID);
    this.propertyService.getPropertyById(this.propertyID).subscribe(
      (response:any)=>{
        this.property = response;
        console.log("year----? "+this.property.year_build);
        this.populateFormFields();

      },
      err=>{
        console.log("Error Occurred!! "+err);
      }
    );
  }

  populateFormFields() {
    this.UpdatePropertyForm.patchValue({
      property_name:this.property.property_name,
      desc:this.property.desc,
      category:this.property.category,
      bedroom:this.property.bedroom,
      bathroom:this.property.bathroom,
      parking:this.property.parking,
      area:this.property.area,
      year_build:this.property.year_build,
      location:this.property.location,
      agentName:this.property.agentName,
      buy:this.property.buy,
      rent:this.property.rent,
      buyPrice:this.property.buyPrice,
      rentPrice:this.property.rentPrice,
      image: this.property.image,
      video: this.property.video,
      balcony:this.property.balcony, 
      deck: this.property.deck, 
      cableTV:this.property.cableTV,
      pool:this.property.pool
      });
      this.isFormReady = true;
  }
  UpdateProperty(){
    console.log("Valid? ",this.UpdatePropertyForm.valid);
    if(this.isFormReady){
      this.UpdatePropertyForm.markAllAsTouched();
        const propertyData = new FormData();
        propertyData.append('property_name', this.UpdatePropertyForm.value.property_name);
        propertyData.append('desc', this.UpdatePropertyForm.value.desc);
        propertyData.append('category', this.UpdatePropertyForm.value.category);
        propertyData.append('bedroom', String(this.UpdatePropertyForm.value.bedroom));
        propertyData.append('bathroom', String(this.UpdatePropertyForm.value.bathroom));
        propertyData.append('parking', String(this.UpdatePropertyForm.value.parking));
        propertyData.append('area', String(this.UpdatePropertyForm.value.area));
        propertyData.append('year_build', this.UpdatePropertyForm.value.year_build);
        propertyData.append('location', this.UpdatePropertyForm.value.location);
        propertyData.append('agentName', this.UpdatePropertyForm.value.agentName);
        propertyData.append('buy', String(this.UpdatePropertyForm.value.buy));
        propertyData.append('rent', String(this.UpdatePropertyForm.value.rent));
        propertyData.append('buyPrice', String(this.UpdatePropertyForm.value.buyPrice));
        propertyData.append('rentPrice', String(this.UpdatePropertyForm.value.rentPrice));
        propertyData.append('balcony', String(this.UpdatePropertyForm.value.balcony));
        propertyData.append('deck', String(this.UpdatePropertyForm.value.deck));
        propertyData.append('cableTV', String(this.UpdatePropertyForm.value.cableTV));
        propertyData.append('pool', String(this.UpdatePropertyForm.value.pool));
        propertyData.append('video', this.UpdatePropertyForm.value.rentPrice);
        propertyData.append('image', this.UpdatePropertyForm.value.image);
        console.log("Inside present");
        console.log("formData: "+ propertyData);
        this.propertyService.UpdateProperty(propertyData, this.propertyID).subscribe(
        (response:any)=>{
          console.log("res: "+response);
          this.router.navigate(['admin/view-agent']);
        },
        err=>{
          console.log("Error Occurred!! "+err);
        }
      );
  }
  }



  onFileSelected(event:any) {
    console.log("image uoload");
    this.UpdatePropertyForm.patchValue({ image: event.target.files[0] });
  }



}
