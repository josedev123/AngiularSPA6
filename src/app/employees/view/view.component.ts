import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  private routeSub: Subscription;
  id: number;
  employee:any;
  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {
  //  this.routeSub = this.route.queryParams.subscribe(params => { --> gets query params

      this.routeSub = this.route.params.subscribe(params => {
        this.id = params.id;

       });
       this.httpClient.get('https://localhost:44302/employee/details/' + this.id)
       .subscribe(response => {
         this.employee = response;
       });
}

}