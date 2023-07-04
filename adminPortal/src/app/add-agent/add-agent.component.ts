import { Component } from '@angular/core';
import { Agent } from './Agent';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgentServiceService } from '../service/agent-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.css']
})
export class AddAgentComponent {
  panelOpenState = false;
  addAgentForm:FormGroup;
  isNotPresent = false;
  constructor(private fb:FormBuilder,private agentService:AgentServiceService, private router:Router){
    this.addAgentForm =  fb.group({
      agentEmail:['',Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])],
      agentName:['',Validators.compose([Validators.required,Validators.minLength(2)])],
      agentAddress:['',Validators.compose([Validators.required])],
      agentMobile:['',Validators.compose([Validators.required,Validators.maxLength(10),Validators.minLength(10)])],
      agentPassoword:['',Validators.compose([Validators.required,Validators.maxLength(30),Validators.minLength(8)])],
      image: ['', Validators.compose([Validators.required])]
    });

  }
  addAgentDetails(){
    console.log("Valid? ",this.addAgentForm.valid);
    
      const formData = new FormData();
      formData.append('agentName', this.addAgentForm.value.agentName);
      formData.append('agentPassoword', this.addAgentForm.value.agentPassoword);
      formData.append('agentMobile', this.addAgentForm.value.agentMobile);
      formData.append('agentEmail', this.addAgentForm.value.agentEmail);
      formData.append('agentAddress', this.addAgentForm.value.agentAddress);
      formData.append('image', this.addAgentForm.value.image);
      
      console.log(this.addAgentForm.value.image);
        console.log("Inside present");
        this.agentService.addAgent(formData).subscribe(
        (response:any)=>{
          console.log("res: "+response);
          this.router.navigate(['admin/view-agent']);
        },
        err=>{
          console.log("Error Occurred!! "+err);
          // this.router.navigate(['admin/view-agent']);
        }
      );
      
  }


  onFileSelected(event:any) {
    console.log("image uoload");
    this.addAgentForm.patchValue({ image: event.target.files[0] });
  }

}
