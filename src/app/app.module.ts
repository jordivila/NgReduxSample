import { AppStoreService } from './app.store';
import { APP_BASE_HREF } from '@angular/common';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot()
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    AppStoreService,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
