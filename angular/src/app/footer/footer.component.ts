import { Component, OnInit } from '@angular/core';

import { NgModule } from '@angular/core';
/*bootstrap*/
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@NgModule({
  declarations: [],
  imports: [NgbModule]
})
export class OtherModule {
}