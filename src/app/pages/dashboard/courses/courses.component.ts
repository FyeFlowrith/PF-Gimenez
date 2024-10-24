import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateEditCoursesComponent } from './create-edit-courses/create-edit-courses.component';
import { Course } from '../../../core/interfaces/course.interfaces';
import { CoursesService } from '../../../core/services/courses.service';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {
  displayedColumns: string[] = ['courseId', 'courseName', 'durationHs', 'classCount', 'teacherName', 'actions'];
  dataSource: Course[] = [];
  isLoading = false;

  constructor(private matDialog: MatDialog, private coursesService: CoursesService){}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.isLoading = true;
    this.coursesService.getCourses().subscribe({
      next: (courses) => {
        this.dataSource = courses;
      },
      complete: () => {
        this.isLoading = false;
      }
    })
  }

  onDelete(id: number): void {
    this.isLoading = true;
    this.coursesService.removeCourseById(id).subscribe({
      next: (courses) => {
        this.dataSource = courses;
      },
      error: (err) => {
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  openModal(editingCourse?: Course): void {
    this.matDialog
      .open(CreateEditCoursesComponent, {data: {editingCourse}})
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (!!result) {
            if (editingCourse) {
             this.handleUpdate(editingCourse.id, result);
            } else {
              this.handleAdd(result);
          }
        }
      },
    });
  }

  handleUpdate(id: number, update: Course): void {
    this.isLoading = true;
    this.coursesService.updateCourseById(id, update).subscribe({
      next: (courses) => {
        this.dataSource = courses;
      },
      error: (err) => {
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  handleAdd(newCourse: Course): void {
    this.isLoading = true;
    this.coursesService.addCourse(newCourse).subscribe({
      next: (courses) => {
        this.dataSource = courses;
      },
      error: (err) => {
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  openDetail(course: Course): void {
    this.matDialog.open(CoursesDetailComponent, {
      data: course
    });
  }
}
