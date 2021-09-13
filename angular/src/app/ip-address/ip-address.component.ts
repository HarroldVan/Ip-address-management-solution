import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ip-address',
  templateUrl: './ip-address.component.html',
  styleUrls: ['./ip-address.component.css']
})
export class IpAddressComponent implements OnInit {


  user : any;
  table : any;

  form: FormGroup;

  constructor(public data : DataService,
    private fb : FormBuilder) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      ip : ['', Validators.required],
      comment : ['', Validators.required]
    });

    this.data.getTable().subscribe(

      (result : any) => {
        this.table = result;
      }

    );

    this.data.getUserData().subscribe(

      (result : any) => {

        this.user = result;

      }

    );

  }

  create() {

    const formData = this.form.getRawValue();

    const data = {
      ip : formData.ip,
      comment : formData.comment
    };

    this.data.create(data).subscribe(

      (result : any) => {
        if (result.data) {
          this.table = result.data
          this.form.reset();
        }
        alert(result.message);
      },
      (error : any) => {
        alert(error);
      }

    );

  }

}
