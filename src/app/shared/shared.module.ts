import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { StudentFullNamePipe } from './pipes/student-full-name.pipe';
import { TitleSizeDirective } from './directives/title-size.directive';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    StudentFullNamePipe,
    TitleSizeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    //Angular Material
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatSelectModule,

    //Pipes
    StudentFullNamePipe,

    //Directives
    TitleSizeDirective
  ]
})
export class SharedModule { }
