import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) { }

  getTable() {
    return this.http.get(this.url+'ip-address');
  }

  getUserData() {
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get(this.url+'user', {headers: headers});
  }

  create(data : any) {
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.post(this.url+'store', data ,{headers: headers});
  }

  getById(data : any) {
    return this.http.get(this.url+'ip-address/'+data);
  }

  update(data : any, id : any) {
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    });

    return this.http.post(this.url+'update/'+id, data, {headers: headers});
  }

  view(id : any) {
    return this.http.get(this.url+'view/'+id);
  }

}
