import { Injectable } from '@angular/core';
import { Student } from '../../pages/dashboard/students/models';
import { delay, Observable, of } from 'rxjs';

let DATABASE: Student[] = [
  {
    id: 1,
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
  constructor() {}

  getStudents(): Observable<Student[]> {
    return of(DATABASE).pipe(delay(2000));
  }

  updateStudentById(id: number, update: Partial<Student>): Observable<Student[]> {
    DATABASE = DATABASE.map(student => (student.id === id ? { ...student, ...update } : student));
    return of(DATABASE).pipe(delay(1000));
  }

  addStudent(newStudent: Omit<Student, 'id' | 'createdAt'>): Observable<Student[]> {
    const lastId = DATABASE.length > 0 ? Math.max(...DATABASE.map(student => student.id)) : 0;
    const studentToAdd: Student = {
      id: lastId + 1,
      ...newStudent,
      createdAt: new Date()
    };
    DATABASE = [...DATABASE, studentToAdd];
    return of(DATABASE).pipe(delay(1000));
  }

  removeStudentById(id: number): Observable<Student[]> {
    DATABASE = DATABASE.filter(student => student.id !== id);
    return of(DATABASE).pipe(delay(1000));
  }
}
