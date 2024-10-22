import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { SharedModule } from '../../../shared/shared.module';



@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
