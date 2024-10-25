import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollmentsComponent } from './enrollments.component';

const routes: Routes = [
  { path: '', component: EnrollmentsComponent },
  { path: 'detail/:id', component: EnrollmentsComponent },
  { path: 'create', component: EnrollmentsComponent },
  { path: 'edit/:id', component: EnrollmentsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrollmentsRoutingModule { }