import { Component} from '@angular/core';
import { WeatherService } from './weather.service';
import { WeatherData } from './weather-data.model';
import { ForecastData } from './forecast-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'my-weather-app';
  cityName!: string;
  weatherData!: WeatherData;
  forecastData!: ForecastData;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {}

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.getForecastData(this.cityName)
    this.cityName = '';
  }
 
  getWeatherData(cityName: string){
    this.weatherService.getWeatherByCityName(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
      }
    })
  }


  getForecastData(cityName: string){
    this.weatherService.getForecastByCityName(this.cityName).subscribe({
      next: (response) => {
        this.forecastData = response;
      }
    })
  }
  
  // getForecast() {
  //   this.weatherService
  //     .getForecastByCityName(this.cityName)
  //     .subscribe((data) => {
  //       this.forecastData = data;
  //     });
  // }

  // getCurrentWeather() {
  //   this.weatherService.getWeatherByCityName(this.cityName)
  //     .subscribe(data => {
  //       this.weatherData = data;
  // });
}


