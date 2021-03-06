import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core'

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherCardComponent implements OnInit {

  @Input() data: any

  constructor () { }

  ngOnInit () {}

}
