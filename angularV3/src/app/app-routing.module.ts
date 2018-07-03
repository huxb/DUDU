import { InvalidComponent } from './invalid/invalid.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidComponent } from './valid/valid.component';

const routes: Routes = [
  {
    path: '', /*default path to site*/
    component: ValidComponent
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
