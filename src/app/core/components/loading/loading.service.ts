import { Injectable } from '@angular/core';
import { AppStoreService } from '../../../app.store';
import { LoadingComponentActions } from './loading.actions';

@Injectable()
export class LoadingService {

    constructor(
        private _appStore: AppStoreService,
        private _loadingActions: LoadingComponentActions) {

    }

    show(text: string) {
        this._appStore.dispatch(this._loadingActions.show(text));
    }

    hide() {
        this._appStore.dispatch(this._loadingActions.hide());
    }
}
