/*
*  Protractor support is deprecated in Angular.
*  Protractor is used in this example for compatibility with Angular documentation tools.
*/
import { bootstrapApplication,provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

// add routing: Lesson-10
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';

bootstrapApplication(AppComponent,
    {
      providers: [
        provideProtractorTestingSupport(),
        // routing: Lesson-10
        provideRouter(routeConfig)
      ]
    }
  ).catch(err => console.error(err));
