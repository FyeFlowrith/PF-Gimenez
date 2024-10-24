import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { SharedModule } from '../../../shared/shared.module';
import { CreateEditStudentComponent } from './create-edit-student/create-edit-student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';


@NgModule({
  declarations: [
    StudentsComponent,
    CreateEditStudentComponent,
    StudentDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StudentsRoutingModule
  ],
  exports: [
    StudentsComponent
  ]
})
export class StudentsModule { }
