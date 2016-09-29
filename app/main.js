"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var header_module_1 = require('./modules/header/header.module');
var page_module_1 = require('./modules/page/page.module');
var footer_module_1 = require('./modules/footer/footer.module');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(header_module_1.HeaderModule);
platform.bootstrapModule(page_module_1.PageModule);
platform.bootstrapModule(footer_module_1.FooterModule);
//# sourceMappingURL=main.js.map