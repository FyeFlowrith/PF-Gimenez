import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentsComponent } from './enrollments.component';
import { EnrollmentsRoutingModule } from './enrollments-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { CreateEditEnrollmentsComponent } from './create-edit-enrollments/create-edit-enrollments.component';
import { EnrollmentDetailComponent } from './enrollment-detail/enrollment-detail.component';



@NgModule({
  declarations: [
    EnrollmentsComponent,
    CreateEditEnrollmentsComponent,
    EnrollmentDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EnrollmentsRoutingModule
  ]
})
export class EnrollmentsModule { }
