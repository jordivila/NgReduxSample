import { RouteDataCustomized } from './../../../services/routing/route-data-customized';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'jvn-route-title',
  templateUrl: 'routeTitle.component.html',
  styleUrls: ['routeTitle.component.css'],
})
export class RouteTitleComponent implements OnInit {

  public routeTitle: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router) {

  }


  ngOnInit() {

    this.routeTitle = '';

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (this.route.snapshot.firstChild && (this.route.snapshot.firstChild.data)) {
          if ((<any>this.route.snapshot.firstChild.data).title) {
            this.routeTitle = (<RouteDataCustomized>this.route.snapshot.firstChild.data).title;
          }
        }
      }

    });

  }

}
