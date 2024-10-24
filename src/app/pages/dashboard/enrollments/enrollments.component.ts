import { Component, OnInit } from "@angular/core";
import { Enrollment } from "../../../core/interfaces/enrollment.interfaces";
import { MatDialog } from "@angular/material/dialog";
import { EnrollmentsService } from '../../../core/services/enrollments.service';
import { CreateEditEnrollmentsComponent } from "./create-edit-enrollments/create-edit-enrollments.component";


@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrl: './enrollments.component.scss'
})

export class EnrollmentsComponent implements OnInit {  
  displayedColumns: string[] = ['id', 'studentId', 'courseId', 'enrollmentDate', 'userId', 'actions'];
  dataSource: Enrollment[] = [];
  isLoading = false;

  constructor(private matDialog: MatDialog, private enrollmentsService: EnrollmentsService){}

  ngOnInit(): void {
    this.loadEnrollments();
  }

  loadEnrollments(): void {
    this.isLoading = true;
    this.enrollmentsService.getEnrollments().subscribe({
      next: (enrollments) => {
        this.dataSource = enrollments;
      },
      complete: () => {
        this.isLoading = false;
      }
    })
  }

  onDelete(id: number): void {
    this.isLoading = true;
    this.enrollmentsService.removeEnrollmentById(id).subscribe({
      next: (enrollments) => {
        this.dataSource = enrollments;
      },
      error: (err) => {
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  openModal(editingEnrollment?: Enrollment): void {
    this.matDialog
      .open(CreateEditEnrollmentsComponent, {data: {editingEnrollment}})
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (!!result) {
            if (editingEnrollment) {
             this.handleUpdate(editingEnrollment.id, result);
            } else {
              this.handleAdd(result);
          }
        }
      },
    });
  }

  handleUpdate(id: number, update: Enrollment): void {
    this.isLoading = true;
    this.enrollmentsService.updateEnrollmentById(id, update).subscribe({
      next: (enrollments) => {
        this.dataSource = enrollments;
      },
      error: (err) => {
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  handleAdd(newEnrollment: Enrollment): void {
    this.isLoading = true;
    this.enrollmentsService.addEnrollment(newEnrollment).subscribe({
      next: (enrollments) => {
        this.dataSource = enrollments;
      },
      error: (err) => {
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
}
