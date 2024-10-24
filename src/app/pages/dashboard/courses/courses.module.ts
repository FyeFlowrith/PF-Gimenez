import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { CreateEditCoursesComponent } from './create-edit-courses/create-edit-courses.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';



@NgModule({
  declarations: [
    CoursesComponent,
    CreateEditCoursesComponent,
    CoursesDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
