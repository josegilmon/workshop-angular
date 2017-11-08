import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WeatherSearchComponent } from './components/weather-search/weather-search.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherSearchComponent,
    WeatherCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
