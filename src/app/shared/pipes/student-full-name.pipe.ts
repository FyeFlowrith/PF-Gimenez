import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../../pages/dashboard/students/models';

@Pipe({
  name: 'studentFullName'
})
export class StudentFullNamePipe implements PipeTransform {
  transform(value: Student): string {
    const result = value.firstName+ ' ' + value.lastName;

    return result;
  }
}
