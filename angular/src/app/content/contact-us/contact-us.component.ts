import { Component, OnInit, NgModule } from '@angular/core';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})

@NgModule({
  imports:[
    Component
  ],
  exports:[
    ContactUsComponent
  ]
})

export class ContactUsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
