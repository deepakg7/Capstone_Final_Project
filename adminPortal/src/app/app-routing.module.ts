import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AddCarouselComponent } from './add-carousel/add-carousel.component';
import { AddHighlightPropertyComponent } from './add-highlight-property/add-highlight-property.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { ViewConsultationComponent } from './view-consultation/view-consultation.component';
import { ViewSlotsComponent } from './view-slots/view-slots.component';
import { UpdatePropertyComponent } from './update-property/update-property.component';
import { DeletePropertyComponent } from './delete-property/delete-property.component';
import { ViewCatalogueComponent } from './view-catalogue/view-catalogue.component';
import { ViewAgentComponent } from './view-agent/view-agent.component';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { UpdateAgentComponent } from './update-agent/update-agent.component';
import { DeleteAgentComponent } from './delete-agent/delete-agent.component';


const routes: Routes = [
  {path: '', redirectTo: 'admin/view-catalogue', pathMatch: 'full'},
  {path: 'admin', component: AdminComponent },
  { 
    path: 'admin', 
    component: AdminComponent,
    children: [ 
      { path: 'add-carousel', component: AddCarouselComponent },
      { path: 'add-highlight-property', component: AddHighlightPropertyComponent },
      { path: 'add-property', component: AddPropertyComponent },
      { path: 'view-consultation', component: ViewConsultationComponent },
      { path: 'view-slots', component: ViewSlotsComponent },
      { path: 'update-property/:propertyID', component: UpdatePropertyComponent },
      { path: 'delete-property', component: DeletePropertyComponent },
      { path: 'view-catalogue', component: ViewCatalogueComponent },
      { path: 'view-agent', component: ViewAgentComponent },
      { path: 'add-agent', component:AddAgentComponent},
      { path: 'update-agent/:agentID', component:UpdateAgentComponent},
      { path: 'delete-agent', component:DeleteAgentComponent}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
