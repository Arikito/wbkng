import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { PageComponent } from './components/page/page.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { MainComponent } from './components/page_main/main.component';
import { PortfolioComponent } from './components/page_portfolio/portfolio.component';
import { TechsComponent } from './components/page_techs/techs.component';
import { AboutComponent } from './components/page_about/about.component';
import { ServicesComponent } from './components/page_services/services.component';
import { BannerComponent } from './components/owl_banner/banner.component';
import { OwlTechsComponent } from './components/owl_techs/owl_techs.component';
import { MapComponent } from './components/map/map.component';
import { SubscribeFormComponent } from './components/form_subscribe/subscribe.component';

import { routing } from './app.routing';


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
		AboutComponent,
		OwlTechsComponent,
		MapComponent,
		SubscribeFormComponent
	],
	bootstrap: [
		PageComponent
	]
})
export class PageModule { }
