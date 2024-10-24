import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from '../../../../core/interfaces/course.interfaces';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrl: './courses-detail.component.scss'
})
export class CoursesDetailComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Course) {
  }
}
