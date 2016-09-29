import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent }  from './components/main_page/main.component';
import { PortfolioComponent }  from './components/portfolio_page/portfolio.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);