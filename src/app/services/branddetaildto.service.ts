import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { brandDetailDtoResponseModel } from '../Models/brandDetailDtoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BranddetaildtoService {

  apiUrl = "https://localhost:44310/api/brands/getbranddetails"
  constructor(private httpClient: HttpClient) { }

  getBrandDetailDto(): Observable<brandDetailDtoResponseModel> {
    return this.httpClient.get<brandDetailDtoResponseModel>(this.apiUrl)
  };
}
