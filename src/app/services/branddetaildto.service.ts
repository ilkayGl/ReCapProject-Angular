import { BrandDetailDto } from 'src/app/Models/brandDetailDto';
import { ListResponseModel } from './../Models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BranddetaildtoService {

  apiUrl = "https://localhost:44310/api/"
  constructor(private httpClient: HttpClient) { }

  getBrandDetailDto(): Observable<ListResponseModel<BrandDetailDto>> {
    let newPath = this.apiUrl + "brands/getbranddetails"
    return this.httpClient.get<ListResponseModel<BrandDetailDto>>(newPath)
  };
}
