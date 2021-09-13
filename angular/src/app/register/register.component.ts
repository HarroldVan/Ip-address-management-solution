import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form : FormGroup

  constructor(private router : Router,
    private auth : AuthService, private fb : FormBuilder) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirm: ['', Validators.required]
    });

    if(this.auth.loggedIn()) {
      this.router.navigate(['/list']);
    }

  }

  submit() {

    const formData = this.form.getRawValue();

    const data = {

      name : formData.name,
      email: formData.email,
      password: formData.password,
      confirm: formData.confirm

    };

    this.auth.register(data).subscribe(
      (result : any) => {
        alert(result.message)
        this.form.reset();
      },
      (error : any) => {
        alert(error);
      }
    );

  }

}
