import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { carDetailDtoResponseModel } from '../Models/carDetailDtoResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CardetaildtoService {

  apiUrl = "https://localhost:44310/api/cars/getcardetails"
  constructor(private httpClient: HttpClient) { }

  getCarDetailDto(): Observable<carDetailDtoResponseModel> {
    return this.httpClient.get<carDetailDtoResponseModel>(this.apiUrl)
  };
}
