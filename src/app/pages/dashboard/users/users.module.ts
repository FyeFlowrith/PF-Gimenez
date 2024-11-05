import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { CreateEditUserComponent } from './create-edit-user/create-edit-user.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    UsersComponent,
    CreateEditUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
  ]
})
export class UsersModule { }
