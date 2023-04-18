import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { WeatherData } from '../weather-data.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  cityName: string = "Cluj-Napoca";
  weatherData!: WeatherData;
  favoriteCities: string[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {}

  getCurrentWeather() {
    this.weatherService.getWeatherByCityName(this.cityName)
      .subscribe(data => {
        this.weatherData = data;
      });
  }

  addToFavorites() {
    if (!this.favoriteCities.includes(this.weatherData.name)) {
      this.favoriteCities.push(this.weatherData.name);
    }
  }
}
