import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spikeresult',
  templateUrl: './spikeresult.component.html',
  styleUrls: [
    '../result.component.css',
    './spikeresult.component.css']
})
export class SpikeresultComponent implements OnInit {
  result:string | null = "";
  constructor() { }

  ngOnInit(): void {
    this.result = localStorage.getItem('result')
    console.log(this.result)
  }

}
