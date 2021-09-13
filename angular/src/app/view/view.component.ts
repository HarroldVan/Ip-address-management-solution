import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id : any;
  list : any;

  constructor(private data : DataService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params.id;

    this.data.view(this.id).subscribe(

      (result : any) => {
        if(result.message) {
          alert(result.message)
        }else {
          this.list = result;
        }
      }

    );


  }

}
