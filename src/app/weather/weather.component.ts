import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../weather.service';
import { WeatherData } from '../weather-data.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  @Input() weatherData!: WeatherData;
  cityName: string = "Cluj-Napoca";
  favoriteCities: string[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getCurrentWeather();
  }

  getCurrentWeather() {
    this.weatherService.getWeatherByCity(this.cityName)
      .subscribe(data => {
        this.weatherData = data;
  });
  }

  addToFavorites() {
    if (!this.favoriteCities.includes(this.weatherData.name)) {
      this.favoriteCities.push(this.weatherData.name);
    }
  }

  isDayTime() {
    const date = new Date();
    const hours = date.getHours();
    return hours > 6 && hours < 18; // assume day time between 6am and 6pm
  }

  getWeatherIconSrcAnimated(description: string) {
    const basePath = 'https://www.weatherbit.io/static/img/animated-icons/';

    switch (description) {
      case 'Clear sky':
        return this.isDayTime() ? `${basePath}day.svg` : `${basePath}night.svg`;
      case 'Moderate Rain':
        return this.isDayTime()
          ? `${basePath}rainy-6.svg`
          : `${basePath}rainy-5.svg`;
      case 'Thunderstorm with rain':
        return this.isDayTime()
          ? `${basePath}thunder.svg`
          : `${basePath}thunder.svg`;
      case 'Few clouds':
        return this.isDayTime()
          ? `${basePath}cloudy-day-2.svg`
          : `${basePath}cloudy.svg`;
      case 'Light snow':
        return this.isDayTime()
          ? `${basePath}snowy-4.svg`
          : `${basePath}snowy-4.svg`;
      case 'Snow':
        return this.isDayTime()
          ? `${basePath}snowy-5.svg`
          : `${basePath}snowy-5.svg`;
      case 'Heavy Snow':
        return this.isDayTime()
          ? `${basePath}snowy-6.svg`
          : `${basePath}snowy-6.svg`;
      default:
        return `${basePath}day.svg`;
    }
  }
}
