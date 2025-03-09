import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
//import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = '9afa8ca944f14bc28e416f593f63a0e8';
  url:any
  constructor(private http: HttpClient) {
   
    this.url=environment.weatherApiBaseUrl
  }

  getWeatherData(cityName: string): Observable<WeatherData> {
    const params = new HttpParams()
      .set('q', cityName)
      .set('units', 'metric')
      .set('appid', this.apiKey);
    

    return this.http.get<WeatherData>(this.url, { params });
  }
}
