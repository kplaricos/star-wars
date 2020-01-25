import { environment } from '../environments/environment';

export const Config = {
  apiScheme: environment.API_SCHEME,
  apiDomain: environment.API_DOMAIN,
  appEnv: environment.production ? 'production' : 'local',
  toApiUrl(path: string) {
      // tslint:disable-next-line:max-line-length
      return `${this.apiScheme}://${this.apiDomain}/api/${path}`;
  },
  // used to test the envionnement
  in_mode(env: string) {
      return env === this.appEnv;
  }
};
