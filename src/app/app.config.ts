import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { provideHttpClient } from '@angular/common/http';
/*
function ...ServiceFactory(): ...Service {
  return environment.production
    ? new ...Service()
    : new ...Service();
}
*/

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), provideAnimationsAsync(),
    /*
    {
      provide: ...Service,
      useFactory: ...ServiceFactory,
    },*/
    { provide: MatSlideToggleModule, useValue: [] },
  ],
};
