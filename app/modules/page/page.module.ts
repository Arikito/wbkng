import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { PageComponent }  from './../../components/page/page.component';

import { MainComponent }  from './../../components/main_page/main.component';
import { PortfolioComponent }  from './../../components/portfolio_page/portfolio.component';
import { BannerComponent }  from './../../components/banner.owl/banner.component';
import { TechsComponent }  from './../../components/techs.owl/techs.component';
import { MapComponent }  from './../../components/map/map.component';

import { routing }       from './../../app.routing';


@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		routing
	],
	declarations: [
		PageComponent,
		MainComponent,
		PortfolioComponent,
		BannerComponent,
		TechsComponent,
		MapComponent
	],
	bootstrap: [
		PageComponent
	]
})
export class PageModule { }
