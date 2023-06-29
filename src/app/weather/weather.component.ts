import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {

  weatherData: any;

  //default icon
  // defaultIconUrl: string = 'assets/weatherICon/clear.png';
  
  constructor(private sanitizer: DomSanitizer, private WeatherService: WeatherService) {

    
  }

  ngOnInit() {
    this.WeatherService.getWeather().subscribe((data: any) => {
      this.weatherData = data;
      console.log(this.weatherData);
    })
  }

// icon map
  // iconMapping: { [key: string]: string } = {
  //     '01d': 'assets/weathericons/clear.png',
  //     '01n': 'assets/weathericons/clear.png',
  //     '02d': 'assets/weathericons/cloudy.png',
  //     '02n': 'assets/weathericons/cloudy.png',
  //     '03d': 'assets/weathericons/cloudy.png',
  //     '03n': 'assets/weathericons/cloudy.png',
  //     '04d': 'assets/weathericons/cloudy.png',
  //     '04n': 'assets/weathericons/cloudy.png',
  //     '09d': 'assets/weathericons/rain.png',
  //     '09n': 'assets/weathericons/rain.png',
  //     '10d': 'assets/weathericons/sun-rain.png',
  //     '10n': 'assets/weathericons/sun-rain.png',
  //     '11d': 'assets/weathericons/thunder.png',
  //     '11n': 'assets/weathericons/thunder.png',
  //     '13d': 'assets/weathericons/snow.png',
  //     '13n': 'assets/weathericons/snow.png',
  //     '50d': 'assets/weathericons/mist.png',
  //     '50n': 'assets/weathericons/mist.png'
  // };
  

  //check for icon
  // getWeatherIconUrl(weatherCondition: string): SafeResourceUrl {
  //   const iconUrl = this.iconMapping[weatherCondition] || this.defaultIconUrl;
  //   return this.sanitizer.bypassSecurityTrustResourceUrl(iconUrl);
  // }
  

}
