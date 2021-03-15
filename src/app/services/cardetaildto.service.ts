import { ListResponseModel } from './../Models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDto } from '../Models/carDetailDto';

@Injectable({
  providedIn: 'root'
})
export class CardetaildtoService {

  apiUrl = "https://localhost:44310/api/"
  constructor(private httpClient: HttpClient) { }

  getCarDetailDto(): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + "cars/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath)
  };


}
