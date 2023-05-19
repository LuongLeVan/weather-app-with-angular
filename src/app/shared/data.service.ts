import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiKey = 'd81cc77a9194b526cddbb0776805a584';
  constructor(private http: HttpClient) { }

  getWeather(name:string){
    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${this.apiKey}`)
  }
}
