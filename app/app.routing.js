"use strict";
var router_1 = require('@angular/router');
var main_component_1 = require('./components/page_main/main.component');
var portfolio_component_1 = require('./components/page_portfolio/portfolio.component');
var services_component_1 = require('./components/page_services/services.component');
var appRoutes = [
    {
        path: '',
        component: main_component_1.MainComponent
    },
    {
        path: 'portfolio',
        component: portfolio_component_1.PortfolioComponent
    },
    {
        path: 'services',
        component: services_component_1.ServicesComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map