"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var header_module_1 = require('./modules/header/header.module');
var content_module_1 = require('./modules/content/content.module');
var footer_module_1 = require('./modules/footer/footer.module');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(header_module_1.HeaderModule);
platform.bootstrapModule(content_module_1.ContentModule);
platform.bootstrapModule(footer_module_1.FooterModule);
//# sourceMappingURL=main.js.map