import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InvalidComponent } from './invalid/invalid.component';
import { ValidComponent } from './valid/valid.component';
import { IntroComponent } from './valid/intro/intro.component';
import { LogupComponent } from './valid/logup/logup.component';
import { HeaderComponent } from './valid/header/header.component';
import { FooterComponent } from './valid/footer/footer.component';
import { SideNavComponent } from './valid/intro/side-nav/side-nav.component';
import { ContentComponent } from './valid/intro/content/content.component';
import { HomeComponent } from './valid/intro/content/home/home.component';
import { AboutUsComponent } from './valid/intro/content/about-us/about-us.component';
import { ProgramComponent } from './valid/intro/content/program/program.component';
import { ContactUsComponent } from './valid/intro/content/contact-us/contact-us.component';
import { LoginComponent } from './valid/logup/login/login.component';
import { SignupComponent } from './valid/logup/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    InvalidComponent,
    ValidComponent,
    IntroComponent,
    LogupComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    ContentComponent,
    HomeComponent,
    AboutUsComponent,
    ProgramComponent,
    ContactUsComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
