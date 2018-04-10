import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
  host: {
    class: 'position-1'
  }
})
export class TopbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
