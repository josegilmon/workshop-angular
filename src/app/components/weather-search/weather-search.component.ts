import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherSearchComponent implements OnInit {

  error: Boolean;
  loading: Boolean;
  searchText: String;
  weatherList: any[];

  constructor() {
    this.error = false;
    this.loading = false;
    this.searchText = '';
    this.weatherList = [];
  }

  ngOnInit() {
  }

  fetchWeather() {
    console.log(`Text: ${this.searchText}`)
  }

}
