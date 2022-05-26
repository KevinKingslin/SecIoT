import { Component, OnInit } from '@angular/core';
import {FormControl, Validators } from '@angular/forms';
import { ToolsService } from 'src/app/tools.service';

@Component({
  selector: 'app-metasploitform',
  templateUrl: './metasploitform.component.html',
  styleUrls: ['./metasploitform.component.css']
})
export class MetasploitformComponent implements OnInit {
  ip = new FormControl('', [Validators.required])
  port = new FormControl('', [Validators.required])
  exname = new FormControl('', [Validators.required])
  spayload = new FormControl('', [Validators.required])
  constructor(private ToolsService: ToolsService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.ToolsService.MetaSploit(this.ip.value, this.port.value, this.exname.value, this.spayload.value)
  }
}
