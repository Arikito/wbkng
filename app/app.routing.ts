import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent }  from './components/page_main/main.component';
import { PortfolioComponent }  from './components/page_portfolio/portfolio.component';
import { ServicesComponent }  from './components/page_services/services.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);