import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { AddCarouselComponent } from './add-carousel/add-carousel.component';
import { AddHighlightPropertyComponent } from './add-highlight-property/add-highlight-property.component';
import { ViewSlotsComponent } from './view-slots/view-slots.component';
import { ViewConsultationComponent } from './view-consultation/view-consultation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatePropertyComponent } from './update-property/update-property.component';
import { DeletePropertyComponent } from './delete-property/delete-property.component';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { ViewCatalogueComponent } from './view-catalogue/view-catalogue.component';
import { ViewAgentComponent } from './view-agent/view-agent.component';
import { UpdateAgentComponent } from './update-agent/update-agent.component';
import { DeleteAgentComponent } from './delete-agent/delete-agent.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AddPropertyComponent,
    AddCarouselComponent,
    AddHighlightPropertyComponent,
    ViewSlotsComponent,
    ViewConsultationComponent,
    UpdatePropertyComponent,
    DeletePropertyComponent,
    AddAgentComponent,
    ViewCatalogueComponent,
    ViewAgentComponent,
    UpdateAgentComponent,
    DeleteAgentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

