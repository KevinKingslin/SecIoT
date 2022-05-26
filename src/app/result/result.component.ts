import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  result:string | null = ""
  constructor() { }

  ngOnInit(): void {
    this.result = localStorage.getItem('result')
    console.log(this.result)
  }
}
