import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ValidComponent } from './valid/valid.component';
import { InvalidComponent } from './invalid/invalid.component';
import { HeaderComponent } from './valid/header/header.component';
import { FooterComponent } from './valid/footer/footer.component';
import { IntroComponent } from './valid/intro/intro.component';
import { SideNavComponent } from './valid/intro/side-nav/side-nav.component';
import { HomeComponent } from './valid/intro/content/home/home.component';
import { AboutUsComponent } from './valid/intro/content/about-us/about-us.component';
import { ProgramComponent } from './valid/intro/content/program/program.component';
import { ContactUsComponent } from './valid/intro/content/contact-us/contact-us.component';
import { LoginComponent } from './valid/login/login.component';
import { SignupComponent } from './valid/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    ValidComponent,
    InvalidComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    SideNavComponent,
    HomeComponent,
    AboutUsComponent,
    ProgramComponent,
    ContactUsComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
