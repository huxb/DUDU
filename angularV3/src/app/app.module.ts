import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ValidComponent } from './valid/valid.component';
import { InvalidComponent } from './invalid/invalid.component';
import { HeaderComponent } from './valid/header/header.component';
import { FooterComponent } from './valid/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ValidComponent,
    InvalidComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
