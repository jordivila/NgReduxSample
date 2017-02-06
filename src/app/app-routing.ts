import { environment } from './../environments/environment';
import { IRouteDataCustomized } from './core/services/routing/route-data-customized';
import { NgModule } from '@angular/core';
import { PreloadAllModules, NoPreloading, Routes, RouterModule } from '@angular/router';

export function GetChildRoutes() {
  return [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    {
      path: 'home',
      loadChildren: 'app/home/home.module#HomeModule',
      data: <IRouteDataCustomized>{
        icon: 'home',
        title: 'Home',
        isMenuItem: (environment.production === false)
      }
    },
    {
      path: 'about',
      loadChildren: 'app/about/about.module#AboutModule',
      data: <IRouteDataCustomized>{
        icon: 'info-circle',
        title: 'About',
        isMenuItem: (environment.production === false)
      }
    },
    {
      path: '**',
      loadChildren: 'app/notFound/not-found.module#NotFoundModule',
      data: <IRouteDataCustomized>{
        icon: 'question',
        title: 'Not Found',
        isMenuItem: (environment.production === false)
      }
    }
  ];
}

@NgModule({
  imports: [
    RouterModule.forRoot(GetChildRoutes(), { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
