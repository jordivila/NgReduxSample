import { environment } from './../../environments/environment';
import { HomeModule } from './home.module';
import { HomeComponent } from './home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

export function GetChildRoutes(): Route[] {
  return [{
    path: '',
    component: HomeComponent,
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
export class HomeRoutingModule { }
