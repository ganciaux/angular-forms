import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { loadingInterceptor } from './core/services/loading/loading.interceptor';
/*
function ...ServiceFactory(): ...Service {
  return environment.production
    ? new ...Service()
    : new ...Service();
}
*/

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withFetch(),
      withInterceptors([
        loadingInterceptor
      ])
    ),
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
