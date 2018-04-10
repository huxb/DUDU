import { Component, OnInit, AfterViewInit, NgModule, ViewChild, ElementRef } from "@angular/core";

/*bootstrap*/
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

declare var require: any;
var contactJson = require('../../../contact/contact.json');

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
  host: {
    class: 'position-1'
  }
})

export class FooterComponent implements OnInit,AfterViewInit {

  email: string;
  contactEmail: string;

  phone: string;
  contactPhone: string;

  locationStreet: string;
  locationUnit: string;
  locationPo: string;
  locationTemp: string;
  locationTempArray: string[];
  locationGoogle: string;

  socialFacebook: string;
  socialTwitter: string;
  socialGoogle: string;
  socialRss: string;

  constructor() {
    this.email = contactJson.contact.email;
    this.contactEmail = contactJson.contact.email;

    this.phone = contactJson.contact.phone;
    this.contactPhone = contactJson.contact.phone;

    this.locationStreet = contactJson.location.street;
    this.locationUnit = contactJson.location.unit;
    this.locationPo = contactJson.location.po;
    let locationTemp:string = contactJson.location.street + contactJson.location.unit + contactJson.location.po;
    let locationTempArray: string[] = locationTemp.split(" ");
    this.locationTemp = "";
    while (locationTempArray.length) {
      locationTemp = locationTempArray.pop() + locationTemp;
    }
    this.locationGoogle = "http://maps.google.com/?q=" + locationTemp;
    
    this.socialFacebook = contactJson.social.facebook;
    this.socialTwitter = contactJson.social.twitter;
    this.socialGoogle = contactJson.social.google;
    this.socialRss = contactJson.social.rss;
  }
  
  ngOnInit() {}

  @ViewChild("foot", {read: ElementRef}) 
  
  private elementView: ElementRef;
  private viewFootHeight : number;
  public getHeight() {
    this.viewFootHeight = this.elementView.nativeElement.offsetHeight;
    this.viewFootHeight = this.viewFootHeight + 2;
    return this.viewFootHeight + 'px';
  }
  ngAfterViewInit() {
    
  }
}

@NgModule({
  imports: [NgbModule, ViewChild, ElementRef],
  declarations: [FooterComponent],
  exports:[FooterComponent]
})

export class OtherModule {}
