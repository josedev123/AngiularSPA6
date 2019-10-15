import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

private url = 'https://localhost:44302/';


  constructor(private httpClient: HttpClient, private router: Router) { }

create(fields) {
  console.log(fields.value);
  const post = fields.value;
  this.httpClient.post(this.url + 'employee/create', post)
    .subscribe(response => {
      console.log(response);
      const employee: any = response;
      post.id = employee.id;
      this.router.navigate(['/employees/view/' + post.id]);
    });
}


  ngOnInit() {
  }

}
