import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from './weather-data.model';
import { ForecastData } from './forecast-data-master.model'
import { ForecastData7 } from './forecast-data.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private owm_key = 'your key';
  private own_url = 'https://api.openweathermap.org/data/2.5';

  private api_key = 'your key' 
  private api_url = 'https://api.weatherbit.io/v2.0/forecast/daily'

  private master_api_key = 'your key';
  private master_api_url = 'https://api.weatherbit.io/v2.0/forecast/hourly';

  constructor(private http: HttpClient) {}

  getWeatherByCity(cityName: string): Observable<WeatherData> {
    const owm_url = `${this.own_url}/weather?q=${cityName}&appid=${this.owm_key}&units=metric`;
    return this.http.get<WeatherData>(owm_url);
  }

  // getForecastByCityName(cityName: string): Observable<ForecastData> {
  //   const url = `${this.owm_url}/forecast?q=${cityName}&appid=${this.owm_key}&units=metric`;
  //   return this.http.get<ForecastData>(url);
  // }
  
  getForecastByCity24Hours(cityName: string): Observable<ForecastData> {
    const url_24h = `${this.master_api_url}?city=${cityName}&key=${this.master_api_key}&hours=24&days[7]`
    return this.http.get<ForecastData>(url_24h)
  }
  getForecastByCity7Days(cityName: string): Observable<ForecastData7> {
    const url_7days = `${this.api_url}?city=${cityName}&key=${this.api_key}&days[7]`;
    return this.http.get<ForecastData7>(url_7days);
  }
 

}
