import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {
  OpenForm:string = ""
  constructor() { }

  ngOnInit(): void {
    function hideloader() {
      const loading = window.document.getElementById("loading");
      if (loading === null) {
        alert('oops');
      } else {
        loading.style.display= "none"!
      }
    }
  }
}
