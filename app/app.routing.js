"use strict";
var router_1 = require('@angular/router');
var main_component_1 = require('./components/page_main/main.component');
var portfolio_component_1 = require('./components/page_portfolio/portfolio.component');
var services_component_1 = require('./components/page_services/services.component');
var techs_component_1 = require('./components/page_techs/techs.component');
var about_component_1 = require('./components/page_about/about.component');
var xt_component_1 = require('./components/projects/xt/xt.component');
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
    },
    {
        path: 'techs',
        component: techs_component_1.TechsComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'portfolio/xt',
        component: xt_component_1.XtComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map