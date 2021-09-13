import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form : FormGroup;

  constructor(private fb : FormBuilder,
    private auth: AuthService,
    private router: Router) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
    })

    if(this.auth.loggedIn()) {
      this.router.navigate(['/list']);
    }

  }

  login() {

    const formData = this.form.getRawValue();

    const data = {
      username : formData.email,
      password : formData.password,
      grant_type : 'password',
      client_id : 2,
      client_secret: 'utzpl34NS5F3Bd0riN0FrhTt2DtTejwpuUumdytL',
      scope : '*'
    };

    this.auth.login(data).subscribe(
      (result : any) => {
        if(result.message) {
          alert(result.message);
        }else {
          localStorage.setItem('token', result.access_token);
          this.router.navigate(['/list']);
        }
        this.form.reset();
      },
      (error : any) => {
        alert(error);
      }
    )

  }

}
