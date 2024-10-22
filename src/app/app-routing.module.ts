import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: '**',
    redirectTo: 'dashboard' // SI LLEGO AGREGO not-found component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
