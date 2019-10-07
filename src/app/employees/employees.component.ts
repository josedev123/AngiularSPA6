import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: any;
  constructor(private httpClient: HttpClient) { 

  }

  ngOnInit() {
    this.httpClient.get('https://localhost:44302/employee')
    .subscribe(response => {
      this.employees = response;
      console.log(response)
    });
  }

}
