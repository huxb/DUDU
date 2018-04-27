import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProgramComponent } from './program/program.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


/*Set Routes*/
export const routesConfig: Routes = [
  { path: '', 
    component: HomeComponent 
  },
  { path: 'aboutUs', 
    component: AboutUsComponent 
  },
  { path: 'program', 
    component: ProgramComponent 
  },
  { path: 'contactUs', 
    component: ContactUsComponent
  }
];

/*Use Routes*/
/*forRoot is used so other modules can access it*/
@NgModule({
  imports: [
    RouterModule.forRoot(routesConfig),
  ],
  exports: [ 
    RouterModule
  ]
})

export class ContentRoutingModule {}


