import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { PageComponent }  from './components/page/page.component';

import { HeaderComponent }  from './components/header/header.component';
import { FooterComponent }  from './components/footer/footer.component';

import { MainComponent }  from './components/page_main/main.component';
import { PortfolioComponent }  from './components/page_portfolio/portfolio.component';
import { ServicesComponent }  from './components/page_services/services.component';
import { BannerComponent }  from './components/owl_banner/banner.component';
import { TechsComponent }  from './components/owl_techs/techs.component';
import { MapComponent }  from './components/map/map.component';

import { routing }       from './app.routing';


@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		routing
	],
	declarations: [
		PageComponent,
		HeaderComponent,
		FooterComponent,
		MainComponent,
		PortfolioComponent,
		ServicesComponent,
		BannerComponent,
		TechsComponent,
		MapComponent
	],
	bootstrap: [
		PageComponent
	]
})
export class PageModule { }
