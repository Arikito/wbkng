import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent }  from './components/page_main/main.component';
import { PortfolioComponent }  from './components/page_portfolio/portfolio.component';
import { ServicesComponent }  from './components/page_services/services.component';
import { TechsComponent } from './components/page_techs/techs.component';
import { AboutComponent } from './components/page_about/about.component';
import { XtComponent } from './components/projects/xt/xt.component';
import { WpComponent } from './components/projects/wp/wp.component';

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
  },
  {
    path: 'techs',
    component: TechsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'portfolio/xt',
    component: XtComponent
  },
  {
    path: 'portfolio/wp',
    component: WpComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);