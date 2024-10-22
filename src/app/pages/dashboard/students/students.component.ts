import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateEditStudentComponent } from './create-edit-student/create-edit-student.component';
import { Student } from './models';
import { StudentsService } from '../../../core/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'] // Corregido 'styleUrl' a 'styleUrls'
})
export class StudentsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'fullName', 'email', 'createdAt', 'actions'];
  dataSource: Student[] = [];
  isLoading = false;

  constructor(private matDialog: MatDialog, private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.setLoading(true);
    this.studentsService.getStudents().subscribe(students => {
      this.dataSource = students;
      this.setLoading(false);
    });
  }

  onDelete(id: number): void {
    this.setLoading(true);
    this.studentsService.removeStudentById(id).subscribe(students => {
      this.updateDataSource(students);
    });
  }

  openModal(editingStudent?: Student): void {
    this.matDialog
      .open(CreateEditStudentComponent, { data: { editingStudent } })
      .afterClosed()
      .subscribe(result => {
        if (result) {
          editingStudent ? this.handleUpdate(editingStudent.id, result) : this.handleAdd(result);
        }
      });
  }

  private handleUpdate(id: number, update: Student): void {
    this.setLoading(true);
    this.studentsService.updateStudentById(id, update).subscribe(students => {
      this.updateDataSource(students);
    });
  }

  private handleAdd(newStudent: Student): void {
    this.setLoading(true);
    this.studentsService.addStudent(newStudent).subscribe(students => {
      this.updateDataSource(students);
    });
  }

  private updateDataSource(students: Student[]): void {
    this.dataSource = students;
    this.setLoading(false);
  }

  private setLoading(loading: boolean): void {
    this.isLoading = loading;
  }
}
