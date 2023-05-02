import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { ForecastData } from '../forecast-data-master.model';
import { ForecastData7 } from '../forecast-data.model';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  @Input()
  forecastData!: ForecastData;
  forecastData7!: ForecastData7;
  cityName = 'Cluj-Napoca';

  weather = 'string';

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getForecast();
    this.getForecast7();
  }

  // scroll 24hours forecast
  scrollHourCards(direction: number) {
    const hourCardsWrapper = document.getElementById('hour-cards-wrapper');
    if (!hourCardsWrapper) {
      return;
    }
    const containerWidth = hourCardsWrapper.offsetWidth;
    const scrollAmount = direction * containerWidth;
    const maxScroll = hourCardsWrapper.scrollWidth - containerWidth;
    let newScroll = hourCardsWrapper.scrollLeft + scrollAmount;
    newScroll = Math.min(Math.max(newScroll, 0), maxScroll);
    hourCardsWrapper.scrollTo({
      left: newScroll,
      behavior: 'smooth',
    });
  }

  //get 24 hours
  getForecast() {
    this.weatherService
      .getForecastByCity24Hours(this.cityName)
      .subscribe((data) => {
        this.forecastData! = data;
      });
  }

  //get 7 days
  getForecast7() {
    this.weatherService
      .getForecastByCity7Days(this.cityName)
      .subscribe((data) => {
        this.forecastData7! = data;
      });
  }

  //days of week
  getDayOfWeek(date: string): string {
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const dayIndex = new Date(date).getDay();
    return daysOfWeek[dayIndex];
  }

  //weather icon
  getWeatherIconSrc(description: string) {
    const basePath = 'https://www.weatherbit.io/static/img/icons/';

    switch (description) {
      case 'Thunderstorm with light rain':
        return this.isDayTime() ? `${basePath}t01d.png` : `${basePath}t01n.png`;
      case 'Thunderstorm with rain':
        return this.isDayTime() ? `${basePath}t02d.png` : `${basePath}t02n.png`;
      case 'Thunderstorm with heavy rain':
        return this.isDayTime() ? `${basePath}t03d.png` : `${basePath}t03n.png`;
      case 'Thunderstorm with light drizzle':
        return this.isDayTime() ? `${basePath}t04d.png` : `${basePath}t04n.png`;
      case 'Thunderstorm with drizzle':
        return this.isDayTime() ? `${basePath}t04d.png` : `${basePath}t04n.png`;
      case 'Thunderstorm with heavy drizzle':
        return this.isDayTime() ? `${basePath}t04d.png` : `${basePath}t04n.png`;
      case 'Thunderstorm with Hail':
        return this.isDayTime() ? `${basePath}t05d.png` : `${basePath}t05n.png`;
      case 'Light Drizzle':
        return this.isDayTime() ? `${basePath}t02d.png` : `${basePath}t02n.png`;
      case 'Drizzle':
        return this.isDayTime() ? `${basePath}t02d.png` : `${basePath}t02n.png`;
      case 'Heavy Drizzle':
        return this.isDayTime() ? `${basePath}t03d.png` : `${basePath}t03n.png`;
      case 'Light rain':
        return this.isDayTime() ? `${basePath}r01d.png` : `${basePath}r01n.png`;
      case 'Moderate Rain':
        return this.isDayTime() ? `${basePath}r02d.png` : `${basePath}r02n.png`;
      case 'Heavy Rain':
        return this.isDayTime() ? `${basePath}r03d.png` : `${basePath}r03n.png`;
      case 'Freezing rain':
        return this.isDayTime() ? `${basePath}f01d.png` : `${basePath}f01n.png`;
      case 'Light shower rain':
        return this.isDayTime() ? `${basePath}r04d.png` : `${basePath}r04n.png`;
      case 'Shower rain':
        return this.isDayTime() ? `${basePath}r05d.png` : `${basePath}r05n.png`;
      case 'Heavy shower rain':
        return this.isDayTime() ? `${basePath}r06d.png` : `${basePath}r06n.png`;
      case 'Light snow':
        return this.isDayTime() ? `${basePath}s01d.png` : `${basePath}s01n.png`;
      case 'Snow':
        return this.isDayTime() ? `${basePath}s02d.png` : `${basePath}s02n.png`;
      case 'Heavy Snow':
        return this.isDayTime() ? `${basePath}s03d.png` : `${basePath}s03n.png`;
      case 'Mix snow/rain':
        return this.isDayTime() ? `${basePath}s04d.png` : `${basePath}s04n.png`;
      case 'Sleet':
        return this.isDayTime() ? `${basePath}s05d.png` : `${basePath}s05n.png`;
      case 'Heavy sleet':
        return this.isDayTime() ? `${basePath}s05d.png` : `${basePath}s05n.png`;
      case 'Snow shower':
        return this.isDayTime() ? `${basePath}s01d.png` : `${basePath}s01n.png`;
      case 'Heavy snow shower':
        return this.isDayTime() ? `${basePath}s02d.png` : `${basePath}s02n.png`;
      case 'Flurries':
        return this.isDayTime() ? `${basePath}s06d.png` : `${basePath}s06n.png`;
      case 'Mist':
        return this.isDayTime() ? `${basePath}a01d.png` : `${basePath}a01n.png`;
      case 'Smoke':
        return this.isDayTime() ? `${basePath}a02d.png` : `${basePath}a02n.png`;
      case 'Haze':
        return this.isDayTime() ? `${basePath}a03d.png` : `${basePath}a03n.png`;
      case 'Sand/dust':
        return this.isDayTime() ? `${basePath}a04d.png` : `${basePath}a04n.png`;
      case 'Fog':
        return this.isDayTime() ? `${basePath}a05d.png` : `${basePath}a05n.png`;
      case 'Freezing Fog':
        return this.isDayTime() ? `${basePath}a06d.png` : `${basePath}a06n.png`;
      case 'Clear sky':
        return this.isDayTime() ? `${basePath}c01d.png` : `${basePath}c01n.png`;
      case 'Few clouds':
        return this.isDayTime() ? `${basePath}c02d.png` : `${basePath}c02n.png`;
      case 'Scattered clouds':
        return this.isDayTime() ? `${basePath}c02d.png` : `${basePath}c02n.png`;
      case 'Broken clouds':
        return this.isDayTime() ? `${basePath}c03d.png` : `${basePath}c03n.png`;
      case 'Overcast clouds':
        return this.isDayTime() ? `${basePath}c04d.png` : `${basePath}c04n.png`;
      case 'Unknown Precipitation':
        return this.isDayTime() ? `${basePath}u00d.png` : `${basePath}u00d.png`;
      default:
        return this.isDayTime() ? `${basePath}u00d.png` : `${basePath}u00d.png`;
    }
  }

  isDayTime() {
    const date = new Date();
    const hours = date.getHours();
    return hours > 6 && hours < 18; // assume day time between 6am and 6pm
  }
}
