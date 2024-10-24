import { Injectable } from '@angular/core';
import { Course } from '../interfaces/course.interfaces';
import { delay, Observable, of } from 'rxjs';

let COURSE_DATABASE: Course[] = [
  { id: 1,
    name: 'Dibujo Técnico I',
    durationHs: 46,
    classCount: 16,
    teacherName: 'Ricardo Martinez',
  },
];

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCourses(): Observable<Course[]> {
    return of(COURSE_DATABASE).pipe(delay(2000));
  }

  updateCourseById(id: number, update: Partial<Course>): Observable<Course[]> {
    COURSE_DATABASE = COURSE_DATABASE.map((course) =>
      course.id === id ? {...course, ...update} : course
  );
  return of(COURSE_DATABASE).pipe(delay(1000));
  }

  addCourse(newCourse: Omit<Course, 'id'>): Observable<Course[]> {
    const lastId = COURSE_DATABASE.length > 0 ? Math.max(...COURSE_DATABASE.map(course => course.id)) : 0;
    const courseToAdd: Course = {
      id: lastId + 1,
      ...newCourse
    };
    COURSE_DATABASE = [...COURSE_DATABASE, courseToAdd];
    return of(COURSE_DATABASE).pipe(delay(1000));
  }

  removeCourseById(id: number): Observable<Course[]> {
    COURSE_DATABASE = COURSE_DATABASE.filter((course) => course.id !== id);
    return of(COURSE_DATABASE).pipe(delay(1000));
  }
}