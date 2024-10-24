import { Injectable } from '@angular/core';
import { Enrollment } from '../interfaces/enrollment.interfaces';
import { delay, Observable, of } from 'rxjs';


let ENROLLMENT_DATABASE: Enrollment[] = [
  { 
    id: 1,
    studentId: 1,
    courseId: 1,
    enrollmentDate: new Date(),
    userId: 1
  },
];


@Injectable({
  providedIn: 'root'
})
export class EnrollmentsService {

  constructor() { }

  getEnrollments(): Observable<Enrollment[]> {
    return of(ENROLLMENT_DATABASE).pipe(delay(2000));
  }

  updateEnrollmentById(id: number, update: Partial<Enrollment>): Observable<Enrollment[]> {
    ENROLLMENT_DATABASE = ENROLLMENT_DATABASE.map((enrollment) =>
      enrollment.id === id ? {...enrollment, ...update} : enrollment
  );
  return of(ENROLLMENT_DATABASE).pipe(delay(1000));
  }

  addEnrollment(newEnrollment: Omit<Enrollment, 'id' | 'enrollmentDate'>): Observable<Enrollment[]> {
    const lastId = ENROLLMENT_DATABASE.length > 0 ? Math.max(...ENROLLMENT_DATABASE.map(enrollment => enrollment.id)) : 0;
    const enrollmentToAdd: Enrollment = {
      id: lastId + 1,
      ...newEnrollment,
      enrollmentDate: new Date(),
      userId: 1,
    };
    ENROLLMENT_DATABASE = [...ENROLLMENT_DATABASE, enrollmentToAdd];
    return of(ENROLLMENT_DATABASE).pipe(delay(1000));
  }

  removeEnrollmentById(id: number): Observable<Enrollment[]> {
    ENROLLMENT_DATABASE = ENROLLMENT_DATABASE.filter((enrollment) => enrollment.id !== id);
    return of(ENROLLMENT_DATABASE).pipe(delay(1000));
  }
}