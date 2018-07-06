import { LoginComponent } from './valid/login/login.component';
import { AboutUsComponent } from './valid/intro/content/about-us/about-us.component';
import { ContactUsComponent } from './valid/intro/content/contact-us/contact-us.component';
import { HomeComponent } from './valid/intro/content/home/home.component';
import { IntroComponent } from './valid/intro/intro.component';
import { InvalidComponent } from './invalid/invalid.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidComponent } from './valid/valid.component';
import { ProgramComponent } from './valid/intro/content/program/program.component';
import { SignupComponent } from './valid/signup/signup.component';

const routes: Routes = [
  {
    path: '', /*default path to site*/
    component: ValidComponent,
    children:[
      {
        path: '', /*intro container*/
        component: IntroComponent,
        children:[
          {
            path: '',/*default home*/
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
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      }
    ]
  },
  {
    path: '**',
    component: InvalidComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
