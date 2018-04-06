import { Component, OnInit, Input } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() title: String;
  collapsed = true;

  toggleCollapsed():void {
    this.collapsed = !this.collapsed;
  }

  constructor() { }

  ngOnInit() {
  }

}


