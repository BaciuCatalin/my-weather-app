import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { ForecastData } from '../forecast-data.model';


// cam de sters
export interface Forecast {
  [hour: number]: {
    // [x: string]: any;
    // icon: string;
    // description: string;
    // temperature: number;
  };
}
//end

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  @Input()
  forecastData!: ForecastData;
  cityName = 'Cluj-Napoca';

  hours!: number[];
  activeHour!: any;
  forecast!: Forecast;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getForecast();
    this.hours = Array.from({ length: 24 }, (_, i) => i);
    this.activeHour = new Date().getHours();
  }

  onHourChange(offset: number): void {
    this.activeHour += offset;
    if (this.activeHour < 0) {
      this.activeHour = 23;
    } else if (this.activeHour > 23) {
      this.activeHour = 0;
    }
    const hourElement = document.getElementById(
      'hour_${this.activeHour.toString().padStart(2,"0")}' //?
    );
    if (hourElement) {
      hourElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }

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

  getForecast() {
    this.weatherService
      .getForecastByCityName(this.cityName)
      .subscribe((data) => {
        this.forecastData = data;
      });
  }
}
