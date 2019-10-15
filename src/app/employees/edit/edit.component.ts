import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  private routeSub: Subscription;
  id: number;
  employee: any = {
    name: '',
    email: ''
  };
  constructor(private route: ActivatedRoute, private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {

    this.routeSub = this.route.params.subscribe(params => {
      this.id = params.id;

     });
    this.httpClient.get('https://localhost:44302/employee/details/' + this.id)
     .subscribe(response => {
       this.employee = response;
     });
  }

  edit(fields) {
    console.log(fields.value);
    const post = fields.value;
    post.id = this.id;
    this.httpClient.post('https://localhost:44302/employee/edit/' + this.id, post).subscribe(
      response => {
        console.log(response);
        const employee: any = response;
        post.id = employee.id;
        this.router.navigate(['/employees/view/' + post.id]);
      }
    );


  }

}
