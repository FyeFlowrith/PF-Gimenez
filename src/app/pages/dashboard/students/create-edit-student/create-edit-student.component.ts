import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StudentDialogData } from '../../../../core/interfaces/student.interfaces';


@Component({
  selector: 'app-create-edit-student',
  templateUrl: './create-edit-student.component.html',
  styleUrl: './create-edit-student.component.scss'
})
export class CreateEditStudentComponent {
  studentForm: FormGroup;

  constructor(
    private matDialogRef: MatDialogRef<CreateEditStudentComponent>, private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data?: StudentDialogData
  ){
    this.studentForm = this.formBuilder.group({
      firstName: [null,[Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]*$')]],
      lastName: [null,[Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]*$')]],
      email: [null,[Validators.required, Validators.email]]
    });
    this.setEditFormValue();
  }

  setEditFormValue() {
    if (this.data?.editingStudent){
      this.studentForm.patchValue(this.data.editingStudent)
    }
  }

  onSave(): void {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
    } else {
      this.matDialogRef.close({
        ...this.studentForm.value,
      })
    }
  }
}
