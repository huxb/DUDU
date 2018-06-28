import { Layer1Component } from './layer1/layer1.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes, ChildrenOutletContexts } from '@angular/router';

import { HomeComponent } from './layer2/home/home.component';
import { AboutUsComponent } from './layer2/about-us/about-us.component';
import { ProgramComponent } from './layer2/program/program.component';
import { ContactUsComponent } from './layer2/contact-us/contact-us.component';


/*Set Routes*/
export const routesConfig: Routes = [
  {
    path: '', /*default path to introduction page*/
    component: Layer1Component,
    children: [
      {
        path: '',
        component: HomeComponent 
      },
      {
        path: 'aboutUs',
        component: AboutUsComponent
      },
      {
        path: 'program',
        component: ProgramComponent
      },
      {
        path: 'contactUs',
        component: ContactUsComponent
      }
    ]
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

export class ContentRoutingModule { }


