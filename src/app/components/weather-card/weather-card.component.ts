import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
