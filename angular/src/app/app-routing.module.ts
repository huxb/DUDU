import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './content/home/home.component';
import { AboutUsComponent } from './content/about-us/about-us.component';
import { ProgramComponent } from './content/program/program.component';
import { ContactUsComponent } from './content/contact-us/contact-us.component';
import { LegalComponent } from './content/legal/legal.component';


/*Set Routes*/
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'program', component: ProgramComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'legal', component: LegalComponent }
];

/*Use Routes*/
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ 
    RouterModule
  ]
})
export class AppRoutingModule {}


