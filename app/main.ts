import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HeaderModule } from './modules/header/header.module';
import { PageModule } from './modules/page/page.module';
import { FooterModule } from './modules/footer/footer.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(HeaderModule);
platform.bootstrapModule(PageModule);
platform.bootstrapModule(FooterModule);