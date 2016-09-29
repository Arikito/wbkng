"use strict";
var router_1 = require('@angular/router');
var main_component_1 = require('./components/main_page/main.component');
var portfolio_component_1 = require('./components/portfolio_page/portfolio.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: main_component_1.MainComponent
    },
    {
        path: 'portfolio',
        component: portfolio_component_1.PortfolioComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map