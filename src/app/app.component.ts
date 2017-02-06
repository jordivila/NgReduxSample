import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { AppStoreService } from './app.store';
import { Unsubscribe } from 'redux';
import { ConfigService } from './core/services/config/config.service';

@Component({
  selector: 'jvn-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {

  public isLoading: boolean;
  private appStoreUnsubscribe: Unsubscribe;

  constructor(
    private _appStore: AppStoreService,
    private _config: ConfigService
  ) { }

  ngOnInit() {

    this.isLoading = false;

    this.appStoreUnsubscribe = this._appStore.subscribe(() => {
      this.stateChanged();
    });

  }

  ngOnDestroy() {
    if (this.appStoreUnsubscribe) {
      this.appStoreUnsubscribe();
    }
  }

  stateChanged() {
    this.isLoading = this._appStore.getState().LoadingStore.loadingIsOpen;
  }

}
