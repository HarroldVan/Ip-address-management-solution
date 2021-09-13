import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient, private router : Router) { }

  register(inputs : any) :Observable<any> {
    return this.http.post(this.url+'register', inputs);
  }

  login(inputs : any) :Observable<any> {
    return this.http.post(this.url+'oauth/token ', inputs);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

}
