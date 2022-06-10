import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-openvasresult',
  templateUrl: './openvasresult.component.html',
  styleUrls: [
    '../result.component.css',
    './openvasresult.component.css']
})
export class OpenvasresultComponent implements OnInit {
  result:string | null = "";
  constructor() { }

  ngOnInit(): void {
    this.result = localStorage.getItem('result')
    console.log(this.result)
  }

}
