import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.css']
})
export class ListEditComponent implements OnInit {

  id : any;
  form: FormGroup;

  formIp = new FormControl('');
  formComment = new FormControl('');

  constructor(private router: Router,
    private route: ActivatedRoute,
    private data : DataService,
    private fb : FormBuilder) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params.id;

    this.data.getById(this.id).subscribe(
      (result : any) => {
        if(result.message) {
          alert(result.message);
        }else {
          this.formIp.setValue(result[0].ip);
          this.formComment.setValue(result[0].comment);
        }
      }
    );

    this.form = new FormGroup({
      ip : this.formIp,
      comment : this.formComment
    });

  }

  submit() {

    const formData = this.form.getRawValue();

    const data = {
      comment : formData.comment
    };

    this.data.update(data, this.id).subscribe(

      (result : any) => {
        if(result.message) {
          alert(result.message);
        }else {
          this.formIp.setValue(result.data.ip);
          this.formComment.setValue(result.data.comment);
        }
      }

    );

  }

}
