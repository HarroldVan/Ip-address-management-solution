import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Expense Manager';

  constructor(public auth : AuthService,
    public data : DataService) {}

  ngOnInit() {


  }


}
