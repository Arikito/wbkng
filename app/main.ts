import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PageModule } from './modules/page.module';
const platform = platformBrowserDynamic();

platform.bootstrapModule(PageModule);
