import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ToolsService {
  constructor(private HttpClient: HttpClient, private router: Router) {}

  
  Nmap(choice: string, ip: string, ports: string){
    const user_token = localStorage.getItem('user_token')
    const headers = new HttpHeaders().set('Authorization', `Bearer ${user_token}`);

    this.HttpClient.post('http://localhost:8001/user/nmap', { choice, ip, ports }, {
      headers: headers
    }).subscribe((res) => {
      console.log(res)
      var data = JSON.parse(JSON.stringify(res));
      localStorage.setItem('result', data.output);
      this.router.navigate(['/result'])
    },
    (err) => {
      console.log(err)
    })
  } 

  MetaSploit(ip: string, port: string, exname: string, spayload: string){
    const user_token = localStorage.getItem('user_token')
    const headers = new HttpHeaders().set('Authorization', `Bearer ${user_token}`);

    this.HttpClient.post('http://localhost:8001/user/metasploit', { ip, port, exname, spayload }, {
      headers: headers
    }).subscribe((res) => {
      console.log(res)
      var data = JSON.parse(JSON.stringify(res));
      localStorage.setItem('result', data.output);
      this.router.navigate(['/result'])
    },
    (err) => {
      console.log(err)
    })
  } 

  Spike(host: string, port: string, skipvar: string, skipstring: string){
    const user_token = localStorage.getItem('user_token')
    const headers = new HttpHeaders().set('Authorization', `Bearer ${user_token}`);

    this.HttpClient.post('http://localhost:8001/user/spike', { host, port, skipvar, skipstring }, {
      headers: headers
    }).subscribe((res) => {
      console.log(res)
      var data = JSON.parse(JSON.stringify(res));
      localStorage.setItem('result', data.output);
      this.router.navigate(['/result'])
    },
    (err) => {
      console.log(err)
    })
  } 
}
