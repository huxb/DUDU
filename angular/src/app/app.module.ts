import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';

/*bootstrap*/
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NotebarComponent } from './notebar/notebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProgramComponent } from './program/program.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { LegalComponent } from './legal/legal.component';

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
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
