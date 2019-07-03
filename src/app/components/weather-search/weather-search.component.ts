import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { WeatherService } from '../../services/weather.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherSearchComponent implements OnInit {

  error: Boolean
  loading: Boolean
  searchText: String
  weatherList$: Observable<any>

  constructor (private weatherService: WeatherService) {
    this.error = false
    this.loading = false
    this.searchText = ''
  }

  ngOnInit () {
  }

  keyPressed (ev: KeyboardEvent) {
    if (ev.code === 'Enter') {
      this.fetchWeather()
    }
  }

  fetchWeather () {
    console.log(`Text: ${this.searchText}`)
    this.error = false
    this.loading = true
    this.weatherService
      .getWeather(this.searchText)
      .subscribe(data => {
        console.log(data)
        this.weatherList$ = data.list
        this.loading = false
      },
        err => {
          this.error = true
          this.loading = false
        })
  }

}
