import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nmapresult',
  templateUrl: './nmapresult.component.html',
  styleUrls: [
    '../result.component.css',
    './nmapresult.component.css']
})
export class NmapresultComponent implements OnInit {

  result:string | null = "";
  port:string | undefined = ""
  latency:string | undefined = "" 
  host:string | undefined = "" 
  time:string | undefined = "" 
  table:Array<string> = []
  constructor() { }

  ngOnInit(): void {
    this.result = localStorage.getItem('result')

    console.log(this.result)
    this.port = this.result?.substring(102,109)
    this.latency = this.result?.substring(123,130)
    this.host = this.result?.substring(283,307)
    this.time = this.result?.substring(318,332)

    // console.log(this.time)

    var tableinput = this.result?.split("(no-response)")[1];
    console.log(tableinput)
    var array = tableinput?.match(/\b(\w+\W+)/g)
    for (var i=0; i<15; i++){
      var element = array![i]
      this.table.push(element)
    }

    // var x = /(\w+)y\W/g.exec(tableinput!)
    // console.log(x)
    // while (x = /(\w+)y\W/g.exec(tableinput!)) {
    //   this.table.push(x[1]);
    // }
  }
}