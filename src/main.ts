import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {registerLicense} from '@syncfusion/ej2-base';
registerLicense('Ngo9BigBOggjHTQxAR8/V1NAaF1cXmhIfEx1RHxQdld5ZFRHallYTnNWUj0eQnxTdEFjWn9bcHxWTmNbWUFzXA==');


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
