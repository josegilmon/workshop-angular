import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

const OWM_API_KEY = 'cce420b78c35e958844f8e4cd0048d56';
const API_URL = `https://api.openweathermap.org/data/2.5/find?units=metric&appid=${OWM_API_KEY}&q=`;

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) {}

  getWeather(city: String): Observable<any> {

    return this.http.get(`${API_URL}${city}`);
  }

}
