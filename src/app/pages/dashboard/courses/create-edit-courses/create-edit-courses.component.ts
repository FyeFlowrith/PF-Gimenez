import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CourseDialogData } from '../../../../core/interfaces/course.interfaces';

@Component({
  selector: 'app-create-edit-courses',
  templateUrl: './create-edit-courses.component.html',
  styleUrl: './create-edit-courses.component.scss'
})
export class CreateEditCoursesComponent {
  courseForm: FormGroup;

  constructor(
    private matDialogRef: MatDialogRef<CreateEditCoursesComponent>, private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data?: CourseDialogData
  ){
    this.courseForm = this.formBuilder.group({
      name: [null,[Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      durationHs: [null,[Validators.required]],
      classCount: [null,[Validators.required]],
      teacherName: [null,[Validators.required, Validators.minLength(6), Validators.maxLength(100)]],
    });
    this.setEditFormValue();
  }

  setEditFormValue() {
    if (this.data?.editingCourse){
      this.courseForm.patchValue(this.data.editingCourse)
    }
  }

  onSave(): void {
    if (this.courseForm.invalid) {
      this.courseForm.markAllAsTouched();
    } else {
      this.matDialogRef.close({
        ...this.courseForm.value,
      })
    }
  }
}
