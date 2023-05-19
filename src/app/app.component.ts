import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('div', { static: true }) myDivRef!: ElementRef;

  date = Date.now();
  cityName:string = 'Hanoi';
  title = 'Weather App';
  infor:any = {};
  description:any = '';
  number:number = 0;
  isHot:boolean = false;

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    
    this.dataService.getWeather(this.cityName).subscribe(res => {
      this.infor = res;
      this.description = this.infor.weather[0].description;
      this.description =  this.description.split(' ')
      .map((word:any) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
      const temp = Number((this.infor.main.temp - 273).toFixed());
      if(temp > 30){
        this.isHot = true;
      
      }else{
        this.isHot = false;
        
      }
    })  
    
  }

  handleFilter(){

    this.dataService.getWeather(this.cityName).subscribe(res => {
      this.infor = res;
      this.date = Date.now()
      this.description = this.infor.weather[0].description;
      this.description =  this.description.split(' ')
      .map((word:any) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');

      const temp = Number((this.infor.main.temp - 273).toFixed());
      
      if(temp > 30){
        this.isHot = true;

       
        
      }else if(temp < 30){
        this.isHot = false;

        
        
      }
  


    })    
   
  }
}
