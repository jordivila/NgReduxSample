import { LayoutModule } from './components/layout/layout.module';
import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Http, HttpModule, XHRBackend, RequestOptions } from '@angular/http';
import { LoadingModule } from './components/loading/loading.module';
import { NameListService, ConfigService } from './services/index';
import '../operators';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpModule,
    LayoutModule,
    LoadingModule.forRoot(),
  ],

  declarations: [

  ],

  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpModule,
    LayoutModule,
    LoadingModule,
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        NameListService,
        ConfigService]
    };
  }


  // Prevent reimport of the CoreModule
  // Only the root AppModule should import the CoreModule.
  // Bad things happen if a lazy loaded module imports it
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

}
