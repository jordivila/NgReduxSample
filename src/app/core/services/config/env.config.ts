// Feel free to extend this interface
// depending on your app specific config.
export interface EnvConfig {
  production: boolean;
  API?: string;
  ENV?: string;
  LOGIN_PAGE?: string;
  SESSION_LOGOUT_TIMER_MINUTS?: number;
}
import { environment } from '../../../../environments/environment';

export const Config: EnvConfig = environment;
