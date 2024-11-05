import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserDialogData } from '../../../../core/interfaces/user.interfaces';

@Component({
  selector: 'app-create-edit-user',
  templateUrl: './create-edit-user.component.html',
  styleUrl: './create-edit-user.component.scss'
})
export class CreateEditUserComponent {
  userForm: FormGroup;

  constructor(
    private matDialogRef: MatDialogRef<CreateEditUserComponent>, private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data?: UserDialogData
  ){
    this.userForm = this.formBuilder.group({
      firstName: [null,[Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]*$')]],
      lastName: [null,[Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]*$')]],
      email: [null,[Validators.required, Validators.email]]
    });
    this.setEditFormValue();
  }

  setEditFormValue() {
    if (this.data?.editingUser){
      this.userForm.patchValue(this.data.editingUser)
    }
  }

  onSave(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    } else {
      this.matDialogRef.close({
        ...this.userForm.value,
      })
    }
  }
}
