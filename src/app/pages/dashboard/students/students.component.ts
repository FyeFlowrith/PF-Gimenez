import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateEditStudentComponent } from './create-edit-student/create-edit-student.component';
import { Student } from './models';

const ELEMENT_DATA: Student[] = [
  { id: 1,
    firstName: 'Carolina',
    lastName: 'Gomez',
    email: 'carolinagomez@ejemplodominio.com.ar',
    createdAt: new Date()
  },
];


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {  
  displayedColumns: string[] = ['id', 'fullName', 'email', 'createdAt', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor(private matDialog: MatDialog){}

  onDelete(id: number): void {{
      this.dataSource = this.dataSource.filter((student) => student.id !== id);
    }
  }

  openModal(editingStudent?: Student): void {
    this.matDialog
      .open(CreateEditStudentComponent, {data: {editingStudent}})
      .afterClosed()
      .subscribe({
        next: (result) => {
          console.log('RECIBIMOS: ', result)

          if (!!result) {
            const lastId = this.dataSource.length > 0 ? Math.max(...this.dataSource.map(student => student.id)) : 0;
            const newId = lastId + 1;

            if (editingStudent) {
              this.dataSource = this.dataSource.map((student) =>
                student.id === editingStudent.id ? {...student, ...result} : student)
            } else {
              this.dataSource = [
                ...this.dataSource,
                {id: newId, ...result, createdAt: new Date()}
              ]
            }
          }
        }
      });
  }
}
