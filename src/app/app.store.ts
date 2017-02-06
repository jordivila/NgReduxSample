import { Injectable } from '@angular/core';
import { logger, crashReporter } from './app.store.middlewares';
import { LoadingReducerService } from './core/components/loading/loading.reducers';
import { ILoadingStore } from './core/components/loading/loading.store';
import { createStore, Store, combineReducers, Reducer, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export interface IAppState {
    LoadingStore: ILoadingStore;
}

@Injectable()
export class AppStoreService implements Store<IAppState> {

    private _store: Store<IAppState>;
    private _reducers: any = {};

    constructor(private _loadingReducerService: LoadingReducerService) {

        const loadingReducer: Reducer<ILoadingStore> = this._loadingReducerService.LoadingComponentReducers;

        this._reducers = {
            LoadingStore: loadingReducer
        };

        this._store = createStore<IAppState>(combineReducers<IAppState>(this._reducers),
            applyMiddleware(thunk, logger, crashReporter)
        );
    }

    dispatch = (action: any) => this._store.dispatch(action);
    getState = () => this._store.getState();
    subscribe = (listener: () => void) => this._store.subscribe(listener);
    replaceReducer = (nextReducer: Reducer<IAppState>) => this._store.replaceReducer(nextReducer);
    addReducers(reducers: any) {
        const reducerKeys = Object.keys(reducers);

        for (let i = 0; i < reducerKeys.length; i++) {
            const key = reducerKeys[i];
            this._reducers[key] = reducers[key];
        }

        this._store.replaceReducer(combineReducers<any>(this._reducers));
    }
}
