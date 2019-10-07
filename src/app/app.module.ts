import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './employees/create/create.component';
import { EditComponent } from './employees/edit/edit.component';
import { ViewComponent } from './employees/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    HomeComponent,
    CreateComponent,
    EditComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
