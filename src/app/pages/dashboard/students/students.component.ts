import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateEditStudentComponent } from './create-edit-student/create-edit-student.component';
import { Student } from '../../../core/interfaces/student.interfaces';
import { StudentsService } from '../../../core/services/students.service';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent implements OnInit {  
  displayedColumns: string[] = ['id', 'fullName', 'email', 'createdAt', 'actions'];
  dataSource: Student[] = [];
  isLoading = false;

  constructor(private matDialog: MatDialog, private studentsService: StudentsService){}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.isLoading = true;
    this.studentsService.getStudents().subscribe({
      next: (students) => {
        this.dataSource = students;
      },
      complete: () => {
        this.isLoading = false;
      }
    })
  }

  onDelete(id: number): void {
    this.isLoading = true;
    this.studentsService.removeStudentById(id).subscribe({
      next: (students) => {
        this.dataSource = students;
      },
      error: (err) => {
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  openModal(editingStudent?: Student): void {
    this.matDialog
      .open(CreateEditStudentComponent, {data: {editingStudent}})
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (!!result) {
            //const lastId = this.dataSource.length > 0 ? Math.max(...this.dataSource.map(student => student.id)) : 0;
            //const newId = lastId + 1;
            if (editingStudent) {
             this.handleUpdate(editingStudent.id, result);
            } else {
              this.handleAdd(result);
          }
        }
      },
    });
  }

  handleUpdate(id: number, update: Student): void {
    this.isLoading = true;
    this.studentsService.updateStudentById(id, update).subscribe({
      next: (students) => {
        this.dataSource = students;
      },
      error: (err) => {
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  handleAdd(newStudent: Student): void {
    this.isLoading = true;
    this.studentsService.addStudent(newStudent).subscribe({
      next: (students) => {
        this.dataSource = students;
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
