import { Component} from '@angular/core';
import { WeatherService } from './weather.service';
import { WeatherData } from './weather-data.model';
import { ForecastData } from './forecast-data-master.model';
import { ForecastData7 } from './forecast-data.model';

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
  forecastData7!: ForecastData7;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {}

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.getForecastData(this.cityName)
    this.getForecastData7(this.cityName)
    this.cityName = '';
  }
 
  //current weather
  getWeatherData(cityName: string){
    this.weatherService.getWeatherByCity(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
      }
    })
  }

  //24 hours forecast
  getForecastData(cityName: string){
    this.weatherService.getForecastByCity24Hours(cityName).subscribe({
      next: (response) => {
        this.forecastData = response;
      }
    })
  }

  //7 days forecast
  getForecastData7(cityName: string){
    this.weatherService.getForecastByCity7Days(cityName).subscribe({
      next: (response) => {
        this.forecastData7 = response;
      }
    })
  }



  // getForecastData(cityName: string){
  //   this.weatherService.getForecastByCityNameW(this.cityName).subscribe({
  //     next: (response) => {
  //       this.forecastData = response;
  //     }
  //   })
  // }
  
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


