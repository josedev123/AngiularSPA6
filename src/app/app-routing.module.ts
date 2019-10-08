import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './employees/create/create.component';
import { ViewComponent } from './employees/view/view.component';


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
   },
   {
    path: 'employees/view/:id',
    component: ViewComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
