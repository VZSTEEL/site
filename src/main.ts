import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { IConfig } from './app.types';

const defaultConfig: IConfig = {
  gallery: { photos: [] }
}

fetch('/config.json')
  .then(data => data.json())
  .catch(() => ({
    gallery: { photos: [] }
  }))
  .then(config => {
    document.title = config.title;
    platformBrowserDynamic([{ provide: IConfig, useValue: config }]).bootstrapModule(AppModule)
      .catch(err => console.error(err));
  });
