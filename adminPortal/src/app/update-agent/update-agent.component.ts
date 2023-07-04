import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentServiceService } from '../service/agent-service.service';
import { Agent } from '../add-agent/Agent';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-agent',
  templateUrl: './update-agent.component.html',
  styleUrls: ['./update-agent.component.css']
})
export class UpdateAgentComponent  implements OnInit{
  agentID:String='';
  panelOpenState = false;
  agent: Agent = new Agent;
  UpdateAgentForm:FormGroup;
  isFormReady = false;

  constructor(private route: ActivatedRoute,private agentService:AgentServiceService,private fb:FormBuilder, private router:Router) {
   this.UpdateAgentForm = fb.group({
  agentEmail: ['', Validators.compose([Validators.maxLength(50), Validators.minLength(5)])],
  agentName: ['', Validators.compose([Validators.maxLength(10), Validators.minLength(2)])],
  agentAddress: ['', Validators.compose([Validators.maxLength(100), Validators.minLength(5)])],
  agentMobile: ['', Validators.compose([Validators.maxLength(10), Validators.minLength(10)])],
  agentPassoword: ['', Validators.compose([Validators.maxLength(30), Validators.minLength(8)])],
  image: [''],
  propertyId: ['']
});

  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.agentID = params['agentID'];
    });
    console.log(this.agentID);

    this.agentService.getAgentById(this.agentID).subscribe(
      (response:any)=>{
        this.agent = response;
        console.log(this.agent);
        this.populateFormFields();
      },
      err=>{
        console.log("Error Occurred!! "+err);
      }
    );
  }
  populateFormFields() {
    this.UpdateAgentForm.patchValue({
      agentName: this.agent.agentName,
      agentMobile: this.agent.agentMobile,
      agentAddress: this.agent.agentAddress,
      agentEmail: this.agent.agentEmail,
      agentPassoword: this.agent.agentPassoword,
      propertyId: this.agent.propertyId
    });

    this.isFormReady = true; // Set the flag to indicate the form is ready
  }


  UpdateAgent(){
    console.log("Valid? ",this.UpdateAgentForm.valid);
    
    if(this.isFormReady){
      this.UpdateAgentForm.markAllAsTouched();
      if(this.UpdateAgentForm.valid){
      const formData = new FormData();
      formData.append('agentName', this.UpdateAgentForm.value.agentName);
      formData.append('agentPassoword', this.UpdateAgentForm.value.agentPassoword);
      formData.append('agentMobile', this.UpdateAgentForm.value.agentMobile);
      formData.append('agentEmail', this.UpdateAgentForm.value.agentEmail);
      formData.append('agentAddress', this.UpdateAgentForm.value.agentAddress);
      formData.append('propertyId', this.UpdateAgentForm.value.propertyId);
      formData.append('image', this.UpdateAgentForm.value.image);




        console.log("Inside present");
        console.log("formData: "+ formData);
        this.agentService.UpdateAgent(formData, this.agentID).subscribe(
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
  }
  onFileSelected(event:any) {
    console.log("image uoload");
    this.UpdateAgentForm.patchValue({ image: event.target.files[0] });
  }

}
