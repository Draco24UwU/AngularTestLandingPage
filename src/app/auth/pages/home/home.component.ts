import { Component } from '@angular/core';
import { APIService } from '../../../services/api.service';
import { WeatherData } from '../../../services/interfaces/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public data!: any;
  public apiService: APIService;

  constructor(apiService: APIService) {
    this.apiService = apiService;
  }
}
