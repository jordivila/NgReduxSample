import { Component, ViewEncapsulation } from '@angular/core';
import { AppStoreService } from '../../../app.store';

@Component({
  // moduleId: module.id.toString(),  // http://stackoverflow.com/questions/37178192/angular2-what-is-the-meanings-of-module-id-in-component
  selector: 'jvn-loading',
  templateUrl: 'loading.component.html',
  styleUrls: ['loading.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoadingComponent {

  public text: string;
  public isOpen: boolean;

  constructor(private _appStore: AppStoreService) {
    this._appStore.subscribe(() => {
      this.text = this._appStore.getState().LoadingStore.loadingText;
      this.isOpen = this._appStore.getState().LoadingStore.loadingIsOpen;
    });
  }

}
