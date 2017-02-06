import { environment } from './../../environments/environment';
import { IRouteDataCustomized } from './../core/services/routing/route-data-customized';
import { NotFoundComponent } from './not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: NotFoundComponent,
        data: <IRouteDataCustomized>{
          icon: 'question',
          title: 'Not Found',
          isMenuItem: (environment.production === false)
        }
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class NotFoundRoutingModule { }
