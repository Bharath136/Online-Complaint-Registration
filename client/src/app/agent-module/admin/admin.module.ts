import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './componets/home/home.component';
import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { ChatComponent } from './componets/chat/chat.component';
import { LoaderSpinnerComponent } from './componets/loader-spinner/loader-spinner.component';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    ChatComponent,
    LoaderSpinnerComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
