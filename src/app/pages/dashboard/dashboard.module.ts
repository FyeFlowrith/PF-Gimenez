import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { StudentsModule } from './students/students.module';
import { SharedModule } from '../../shared/shared.module';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    SharedModule,
    StudentsModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
