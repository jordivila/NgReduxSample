import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingReducerService } from './loading.reducers';
import { LoadingComponentActions } from './loading.actions';
import { LoadingComponent } from './loading.component';
import { LoadingService } from './loading.service';

@NgModule({
    imports: [CommonModule],
    declarations: [LoadingComponent],
    exports: [LoadingComponent],
})
export class LoadingModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: LoadingModule,
            providers: [LoadingReducerService, LoadingComponentActions, LoadingService]
        };
    }

    // Prevent reimport of the LoadingModule
    // Only the root AppModule should import the LoadingModule.
    // Bad things happen if a lazy loaded module imports it
    constructor( @Optional() @SkipSelf() parentModule: LoadingModule) {
        if (parentModule) {
            throw new Error(
                'LoadingModule is already loaded. Import it in the AppModule only');
        }
    }
}
