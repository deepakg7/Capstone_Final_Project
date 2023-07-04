import { Component, OnInit } from '@angular/core';
import { Consult } from './Consult';
import { ConsultServiceService } from '../service/consult-service.service';

@Component({
  selector: 'app-view-consultation',
  templateUrl: './view-consultation.component.html',
  styleUrls: ['./view-consultation.component.css']
})
export class ViewConsultationComponent implements OnInit {
  
  consult:Consult[]= [];
  filteredProperties: any[];
  searchValue: string ='';

  constructor(private consultService:ConsultServiceService){
    this.filteredProperties = this.consult;
  }
  ngOnInit(): void {
    this.consultService.getAllConsultation().subscribe(
      (response:any)=>{
        this.consult = response;
        this.filteredProperties = this.consult;
        console.log(this.consult);
      },
      err=>{
        console.log("Error Occurred!! "+err);
      }
    );
  }

  search(): void {
    if (this.searchValue) {
        console.log(this.consult[0].fName);
        this.filteredProperties = this.consult.filter(agent =>
          agent.consultId.toString().includes(this.searchValue) ||
          agent.fName.toLowerCase().includes(this.searchValue.toLowerCase()) ||
          agent.lName.toLowerCase().includes(this.searchValue.toLowerCase()) ||
          agent.email.toLowerCase().includes(this.searchValue.toLowerCase())||
          agent.message.toLowerCase().includes(this.searchValue.toLowerCase())
      );
      console.log(this.filteredProperties);
    } else {
      this.filteredProperties = this.consult;
    }
  }

  delete(cID:string){
    this.consultService.deleteConsultation(cID).subscribe(
      (response:any)=>{
        console.log(response);
      },(err:any)=>{
        console.log(err);
      }
    )
  }


}
