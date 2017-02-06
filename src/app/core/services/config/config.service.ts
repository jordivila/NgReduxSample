import { Config, EnvConfig } from './env.config';
import { Injectable, Inject } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

export interface IConfigService extends EnvConfig {
    APP_BASE_HREF?: string;
}

@Injectable()
export class ConfigService implements IConfigService {

    readonly API?: string = Config.API;
    readonly ENV?: string = Config.ENV;
    readonly LOGIN_PAGE?: string = Config.LOGIN_PAGE;
    readonly SESSION_LOGOUT_TIMER_MINUTS?: number = Config.SESSION_LOGOUT_TIMER_MINUTS;
    readonly APP_BASE_HREF?: string;
    readonly production: boolean = Config.production;

    constructor( @Inject(APP_BASE_HREF) APP_BASE_HREF: any) {
        this.APP_BASE_HREF = APP_BASE_HREF;
    }

}
