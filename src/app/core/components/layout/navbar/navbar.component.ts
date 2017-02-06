import { IRouteDataCustomized } from './../../../services/routing/route-data-customized';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouteDataCustomized } from '../../../services/routing/route-data-customized';

@Component({
  // moduleId: module.id.toString(),  // http://stackoverflow.com/questions/37178192/angular2-what-is-the-meanings-of-module-id-in-component
  selector: 'jvn-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})

export class NavbarComponent {

  public items: any = [];

  constructor(private _router: Router) {
    this._router.config.forEach((routeItem) => {
      if (routeItem.data) {
        if ((<IRouteDataCustomized>routeItem.data).isMenuItem) {
          this.items.push(
            {
              title: routeItem.data['title'],
              icon: routeItem.data['icon'],
              action: routeItem.path
            });
        }
      }
    });
  }
}
