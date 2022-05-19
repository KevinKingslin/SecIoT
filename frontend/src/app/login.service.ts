import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';

import { json } from 'body-parser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private HttpClient: HttpClient, private router: Router) { }

  PostLoginData(username: string, password: string): string {

    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json');

    this.HttpClient.post('http://localhost:8001/login', { username, password }, {
      headers: headers
    }).subscribe((res) => {
      console.log(res)
      this.router.navigate(['/index'])
      return "200"
    },
    (err) => {
      console.log(err)
      return "400"
    })
    return "200"
  }
}
