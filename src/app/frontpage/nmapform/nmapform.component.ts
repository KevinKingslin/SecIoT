import { Component, OnInit } from '@angular/core';
import {FormControl, Validators } from '@angular/forms';
import { ToolsService } from 'src/app/tools.service';

@Component({
  selector: 'app-nmapform',
  templateUrl: './nmapform.component.html',
  styleUrls: ['./nmapform.component.css']
})
export class NmapformComponent implements OnInit {
  choice = new FormControl('', [Validators.required])
  ip = new FormControl('')
  ports = new FormControl('')
  constructor(private ToolsService: ToolsService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    localStorage.setItem('option', "nmap");
    this.ToolsService.Nmap(this.choice.value, this.ip.value, this.ports.value)
  }
}
