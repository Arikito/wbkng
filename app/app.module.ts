import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { CarouselComponent }  from './carousel.component';
import { TechsComponent }  from './techs.component';
import { MapComponent }  from './map.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CarouselComponent, TechsComponent, MapComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
