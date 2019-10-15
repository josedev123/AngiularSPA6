import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './employees/create/create.component';
import { ViewComponent } from './employees/view/view.component';
import { EditComponent } from './employees/edit/edit.component';
import { ListComponent } from './employees/list/list.component';


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
    path: 'employees/list',
    component: ListComponent
   },
   {
    path: 'employees/view/:id',
    component: ViewComponent
   },
   {
    path: 'employees/edit/:id',
    component: EditComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
