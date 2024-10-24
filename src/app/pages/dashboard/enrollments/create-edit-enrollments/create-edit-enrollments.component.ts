import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EnrollmentDialogData } from '../../../../core/interfaces/enrollment.interfaces';


@Component({
  selector: 'app-create-edit-enrollments',
  templateUrl: './create-edit-enrollments.component.html',
  styleUrl: './create-edit-enrollments.component.scss'
})
export class CreateEditEnrollmentsComponent {
  enrollmentForm: FormGroup;
  studentIds = [1,2,3];
  courseIds = [1,2,3];

  constructor(
    private matDialogRef: MatDialogRef<CreateEditEnrollmentsComponent>, private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data?: EnrollmentDialogData
  ){
    this.enrollmentForm = this.formBuilder.group({
      studentId: [null,[Validators.required]],
      courseId: [null,[Validators.required]],
    });
    this.setEditFormValue();
  }

  setEditFormValue() {
    if (this.data?.editingEnrollment){
      this.enrollmentForm.patchValue(this.data.editingEnrollment)
    }
  }

  onSave(): void {
    if (this.enrollmentForm.invalid) {
      this.enrollmentForm.markAllAsTouched();
    } else {
      this.matDialogRef.close({
        ...this.enrollmentForm.value,
      })
    }
  }
}
