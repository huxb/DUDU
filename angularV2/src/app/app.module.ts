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
import { AboutUsComponent } from './layer2/intro/about-us/about-us.component';
import { ContactUsComponent } from './layer2/intro/contact-us/contact-us.component';
import { FooterComponent } from './layer2/intro/footer/footer.component';
import { HomeComponent } from './layer2/intro/home/home.component';
import { LeftNavBtnComponent } from './layer2/intro/left-nav-btn/left-nav-btn.component';
import { ProgramComponent } from './layer2/intro/program/program.component';
import { Layer2Component } from './layer2/layer2.component';
import { IdentifyComponent } from './layer2/identify/identify.component';
import { IntroComponent } from './layer2/intro/intro.component';
import { LoginComponent } from './layer2/identify/login/login.component';
import { SignupComponent } from './layer2/identify/signup/signup.component';
import { InvalidComponent } from './layer1/invalid/invalid.component';


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
    Layer2Component,
    IntroComponent,
    IdentifyComponent,
    LoginComponent,
    SignupComponent,
    InvalidComponent
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
