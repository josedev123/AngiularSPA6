import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employees: any;


  constructor( private httpClient: HttpClient) {}

  ngOnInit() {

    this.httpClient.get('https://localhost:44302/employee').subscribe(
      response => this.employees = response
    );

  }

}
