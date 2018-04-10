import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/*bootstrap*/
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NotebarComponent } from './shared/notebar/notebar.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { NavbarComponent } from './shared/navbar/navbar.component'; 
import { HomeComponent } from './content/home/home.component';
import { AboutUsComponent } from './content/about-us/about-us.component';
import { ProgramComponent } from './content/program/program.component';
import { ContactUsComponent } from './content/contact-us/contact-us.component';
import { LegalComponent } from './content/legal/legal.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NotebarComponent,
    TopbarComponent,
    NavbarComponent,
    HomeComponent,
    AboutUsComponent,
    ProgramComponent,
    ContactUsComponent,
    FooterComponent,
    LegalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
