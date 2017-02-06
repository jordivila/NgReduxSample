import { Store, Action, Dispatch } from 'redux';
import { IAppState } from './app.store';

/**
 * Lets you dispatch a function instead of an action.
 * This function will receive `dispatch` and `getState` as arguments.
 *
 * Useful for early exits (conditions over `getState()`), as well
 * as for async control flow (it can `dispatch()` something else).
 *
 * `dispatch` will return the return value of the dispatched function.
 */
export const thunk =
    (store: Store<IAppState>) =>
        (next: Dispatch<IAppState>) =>
            (action: Action) => {
                typeof action === 'function' ?
                    action(store.dispatch, store.getState) :
                    next(action);
            };

/**
 * Logs all actions and states after they are dispatched.
 */
export const logger: any =
    (store: Store<IAppState>) =>
        (next: Dispatch<IAppState>) =>
            (action: Action) => {
                console.group(action.type);
                // tslint:disable-next-line
                console.info('dispatching', action);
                const result = next(action);
                console.log('next state', store.getState());
                console.groupEnd();
                return result;
            };


/**
 * Sends crash reports as state is updated and listeners are notified.
 */
export const crashReporter: any =
    (store: Store<IAppState>) =>
        (next: Dispatch<IAppState>) =>
            (action: Action) => {
                {
                    try {
                        return next(action);
                    } catch (err) {
                        console.error('Caught an exception!', err);
                        // Raven.captureException(err, {
                        //     extra: {
                        //         action,
                        //         state: store.getState()
                        //     }
                        // })
                        throw err;
                    }
                }
            };
