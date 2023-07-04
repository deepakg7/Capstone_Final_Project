import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  ngOnInit(): void {
  }
  displayedComponent: any; // This will hold the reference to the currently displayed component
  isComponentVisible = false; // Flag to control component visibility
    
  isActive(component: any): boolean {
    return this.displayedComponent === component;
  }


  panelOpenState = false
  orders: any[] = [];
}
