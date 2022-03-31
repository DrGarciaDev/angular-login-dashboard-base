import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    HomeComponent, 
    NavigationComponent,
    UsersComponent, 
  ],
  imports: [
    CommonModule,

    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
