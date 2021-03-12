import { Observable } from 'rxjs';
import { carResponseModel } from './../Models/carResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = "https://localhost:44310/api/cars/getall"
  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<carResponseModel> {
    return this.httpClient.get<carResponseModel>(this.apiUrl)
  };
}