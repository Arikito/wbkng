import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './../../components/content/app.component';
import { BannerComponent }  from './../../components/banner.owl/banner.component';
import { TechsComponent }  from './../../components/techs.owl/techs.component';
import { MapComponent }  from './../../components/map/map.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, BannerComponent, TechsComponent, MapComponent],
  bootstrap:    [ AppComponent ]
})
export class ContentModule { }
