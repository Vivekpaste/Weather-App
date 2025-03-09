import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title='WeatherApp';

  weatherData: WeatherData | undefined;

  constructor(private weatherService:WeatherService){
    
  }
  ngOnInit(): void {
    this.weatherService.getWeatherData('Ponda')
    .subscribe({
      next:(response: any)=>{
        this.weatherData=response;
      }
    })
  
  }
}