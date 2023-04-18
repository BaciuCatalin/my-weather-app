import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from './weather-data.model';
import { ForecastData } from './forecast-data.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private API_KEY = 'e889ef4d82860159e7affb72e78b6fcb';
  private BASE_URL = 'https://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient) {}

  getWeatherByCityName(cityName: string): Observable<WeatherData> {
    const url = `${this.BASE_URL}/weather?q=${cityName}&appid=${this.API_KEY}&units=metric`;
    // return this.http.get(url);
    return this.http.get<WeatherData>(url);
  }

  getForecastByCityName(cityName: string): Observable<ForecastData> {
    const url = `${this.BASE_URL}/forecast?q=${cityName}&appid=${this.API_KEY}&units=metric`;
    // return this.http.get(url);
    return this.http.get<ForecastData>(url);
  }
}
