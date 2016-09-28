import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HeaderModule } from './modules/header/header.module';
import { ContentModule } from './modules/content/content.module';
import { FooterModule } from './modules/footer/footer.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(HeaderModule);
platform.bootstrapModule(ContentModule);
platform.bootstrapModule(FooterModule);