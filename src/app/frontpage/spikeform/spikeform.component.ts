import { Component, OnInit } from '@angular/core';
import {FormControl, Validators } from '@angular/forms';
import { ToolsService } from 'src/app/tools.service';

@Component({
  selector: 'app-spikeform',
  templateUrl: './spikeform.component.html',
  styleUrls: ['./spikeform.component.css']
})
export class SpikeformComponent implements OnInit {
  host = new FormControl('', [Validators.required])
  port = new FormControl('', [Validators.required])
  skipvar = new FormControl('')
  skipstring = new FormControl('')
  constructor(private ToolsService: ToolsService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    localStorage.setItem('option', "spike");
    this.ToolsService.Spike(this.host.value, this.port.value, this.skipvar.value, this.skipstring.value)
  }
}
