import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  //withComponent... sirve para pasar desde el routing algun dato
  providers: [provideRouter(routes, withComponentInputBinding())]
};
