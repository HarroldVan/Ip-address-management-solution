import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  table : any;

  constructor(public data : DataService) { }

  ngOnInit(): void {

    this.data.getTable().subscribe(

      (result : any) => {
        this.table = result;
      }

    );

  }

}
