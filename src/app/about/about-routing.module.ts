import { environment } from './../../environments/environment';
import { AboutModule } from './about.module';
import { AboutComponent } from './about.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

export function GetChildRoutes(): Route[] {
  return [{
    path: '',
    component: AboutComponent,
  }];
}

@NgModule({
  imports: [
    RouterModule.forChild(GetChildRoutes())
  ],
  exports: [
    RouterModule
  ]
})
export class AboutRoutingModule { }
