import { Car } from './../Models/car';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../Models/listResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44310/api/";
  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  };

  getCarsByColor(colorId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcarsbycolorId?colorId=" + colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  };//cars/getcarsbybrandId?brandId=

  getCarsByBrand(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcarsbybrandId?brandId=" + brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  };//cars/getcarsbybrandId?brandId=


}
