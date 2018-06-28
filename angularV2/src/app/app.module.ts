import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ContentRoutingModule } from './/app.routing.module';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layer1/header/header.component';
import { NavbarComponent } from './layer1/header/navbar/navbar.component';
import { NoticebarComponent } from './layer1/header/noticebar/noticebar.component';
import { Layer1Component } from './layer1/layer1.component';
import { AboutUsComponent } from './layer2/about-us/about-us.component';
import { ContactUsComponent } from './layer2/contact-us/contact-us.component';
import { FooterComponent } from './layer2/footer/footer.component';
import { HomeComponent } from './layer2/home/home.component';
import { LeftNavBtnComponent } from './layer2/left-nav-btn/left-nav-btn.component';
import { ProgramComponent } from './layer2/program/program.component';
import { Layer2Component } from './layer2/layer2.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    NoticebarComponent,
    Layer1Component,
    AboutUsComponent,
    ContactUsComponent,
    FooterComponent,
    HomeComponent,
    LeftNavBtnComponent,
    ProgramComponent,
    Layer2Component
  ],
  imports: [
    BrowserModule,
    ContentRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
