import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './employees/create/create.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
   },
   {
    path: 'employees',
    component: EmployeesComponent
   },
   {
    path: 'employees/create',
    component: CreateComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
