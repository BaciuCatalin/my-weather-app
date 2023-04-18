import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { ForecastData } from '../forecast-data.model';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  @Input()
  cityName = "Barcelona";
  forecastData!: ForecastData;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getForecast();
  }

  getForecast() {
    this.weatherService.getForecastByCityName(this.cityName)
      .subscribe(data => {
        this.forecastData = data;
      });
  }
}