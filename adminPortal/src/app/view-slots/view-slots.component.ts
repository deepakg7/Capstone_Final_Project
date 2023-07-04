import { Component, OnInit } from '@angular/core';
import { ScheduleTourService } from '../service/schedule-tour.service';
import { Tour } from './Tour';

@Component({
  selector: 'app-view-slots',
  templateUrl: './view-slots.component.html',
  styleUrls: ['./view-slots.component.css']
})
export class ViewSlotsComponent implements OnInit{
  tour:Tour[]= [];
  filteredProperties: any[];
  searchValue: string ='';
  constructor(private scheduleTour:ScheduleTourService){
    this.filteredProperties = this.tour;
  }
  ngOnInit(): void {
    this.scheduleTour.getAllTours().subscribe(
      (response:any)=>{
        this.tour = response;
        this.filteredProperties = this.tour;
        console.log(this.tour);
      },
      err=>{
        console.log("Error Occurred!! "+err);
      }
    );
  }


  search(): void {
    if (this.searchValue) {
        console.log(this.tour[0].cName);
        this.filteredProperties = this.tour.filter(agent =>
          agent.cName.toString().includes(this.searchValue) ||
          agent.date.toLowerCase().includes(this.searchValue.toLowerCase()) ||
          agent.email.toLowerCase().includes(this.searchValue.toLowerCase()) ||
          agent.location.toLowerCase().includes(this.searchValue.toLowerCase())||
          agent.slots.toLowerCase().includes(this.searchValue.toLowerCase())
      );
      console.log(this.filteredProperties);
    } else {
      this.filteredProperties = this.tour;
    }
  }
}
