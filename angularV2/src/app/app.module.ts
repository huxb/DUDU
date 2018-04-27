import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ContentRoutingModule } from './/content/content-routing.module';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/header/navbar/navbar.component';
import { NoticebarComponent } from './shared/header/noticebar/noticebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './content/home/home.component';
import { AboutUsComponent } from './content/about-us/about-us.component';
import { ProgramComponent } from './content/program/program.component';
import { ContactUsComponent } from './content/contact-us/contact-us.component';
import { ContentComponent } from './content/content.component';
import { LeftNavBtnComponent } from './shared/left-nav-btn/left-nav-btn.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    NoticebarComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    ProgramComponent,
    ContactUsComponent,
    ContentComponent,
    LeftNavBtnComponent
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
