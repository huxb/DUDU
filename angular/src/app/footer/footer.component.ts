import { Component, OnInit, NgModule, ViewChild, ElementRef } from "@angular/core";

/*bootstrap*/
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @ViewChild("foot", {read: ElementRef}) 
  
  private elementView: ElementRef;
  private viewFootHeight : number;
  public getHeight() {
    this.viewFootHeight = this.elementView.nativeElement.offsetHeight;
    this.viewFootHeight = this.viewFootHeight + 5;
    return this.viewFootHeight + 'px';
  }
}

@NgModule({
  declarations: [FooterComponent],
  imports: [NgbModule, ViewChild, ElementRef]
})
export class OtherModule {}
