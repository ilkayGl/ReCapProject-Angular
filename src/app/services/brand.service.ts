import { Brand } from './../Models/brand';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../Models/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "https://localhost:44310/api/";
  constructor(private httpClient: HttpClient) { }

  getBrands(): Observable<ListResponseModel<Brand>> {
    let newPath = this.apiUrl + "brands/getall"
    return this.httpClient.get<ListResponseModel<Brand>>(newPath)
  };

  getCarsByBrand(brandId: number): Observable<ListResponseModel<Brand>> {
    let newPath = this.apiUrl + "cars/getcarsbybrandId?brandId=" + brandId
    return this.httpClient.get<ListResponseModel<Brand>>(newPath)
  };//cars/getcarsbybrandId?brandId=
}
