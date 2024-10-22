import { Injectable } from '@angular/core';
import { Student } from '../../pages/dashboard/students/models';
import { delay, Observable, of } from 'rxjs';


let DATABASE: Student[] = [
  { id: 1,
    firstName: 'Carolina',
    lastName: 'Gomez',
    email: 'carolinagomez@ejemplodominio.com.ar',
    createdAt: new Date()
  },
];

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

  getStudents(): Observable<Student[]> {
    return of(DATABASE).pipe(delay(2000));
  }

  updateStudentById(id: number, update: Partial<Student>): Observable<Student[]> {
    DATABASE = DATABASE.map((student) =>
      student.id === id ? {...student, ...update} : student
  );
  return of(DATABASE).pipe(delay(1000));
  }

  removeStudentById(id: number): Observable<Student[]> {
    DATABASE = DATABASE.filter((student) => student.id !== id);
    return of(DATABASE).pipe(delay(1000));
  }
}