// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { EnvironmentConfiguration } from "../app/models/environment-configuration";




const serverUrl='https://localhost:7244/api';


// The list of file replacements can be found in `angular.json`.
export const environment: EnvironmentConfiguration = {
  env_name: 'dev',
  production: false,
  apiUrl: serverUrl,
 entraIdConfig: {
    clientId: '6d1c1392-4adc-4f06-92fb-bdd65c74ae45',
    authority: 'https://courseflowapp.ciamlogin.com/',
    redirectUri: 'http://localhost:4200/auth',
    postLogoutRedirectUri: 'http://localhost:4200/courses',
    scopeUrls: {
      userReadScope: 'api://c4031612-e94c-4259-94f0-e45e3e11329a/User.Read',
      userWriteScope: 'api://c4031612-e94c-4259-94f0-e45e3e11329a/User.Write'
    },
    apiEndpointUrl: serverUrl
  },
  cacheTimeInMinutes: 30,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
