import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherData: any;

  constructor(private http: HttpClient) {
  }

  private apiKey = 'c8b96874faaf687f435f5b55dd24d643';
  
  getWeather() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Klaipėda&units=metric&appid=c8b96874faaf687f435f5b55dd24d643';

    return this.http.get(url);
  }

}


