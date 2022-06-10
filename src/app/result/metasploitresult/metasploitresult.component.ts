import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metasploitresult',
  templateUrl: './metasploitresult.component.html',
  styleUrls: [
    '../result.component.css',
    './metasploitresult.component.css']
})
export class MetasploitresultComponent implements OnInit {
  result:string | null = "";
  constructor() { }

  ngOnInit(): void {
    this.result = localStorage.getItem('result')
    console.log(this.result)
  }

}
