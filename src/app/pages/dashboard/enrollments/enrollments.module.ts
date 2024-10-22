import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentsComponent } from './enrollments.component';
import { EnrollmentsRoutingModule } from './enrollments-routing.module';
import { SharedModule } from '../../../shared/shared.module';



@NgModule({
  declarations: [
    EnrollmentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EnrollmentsRoutingModule
  ]
})
export class EnrollmentsModule { }
