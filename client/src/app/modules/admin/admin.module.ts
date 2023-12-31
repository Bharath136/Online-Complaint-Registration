import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AgentsComponent } from './components/agents/agents.component';
import { ComplaintsComponent } from './components/complaints/complaints.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddAgentComponent } from './components/add-agent/add-agent.component';
import { HomeComponent } from './components/home/home.component';
import { CustomersComponent } from './components/customers/customers.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderSpinnerComponent } from './components/loader-spinner/loader-spinner.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AgentsComponent,
    ComplaintsComponent,
    SidebarComponent,
    AddAgentComponent,
    HomeComponent,
    CustomersComponent,
    LoaderSpinnerComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class AdminModule { }
