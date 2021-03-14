import { RentalDetailDto } from 'src/app/Models/rentalDetailDto';
import { ListResponseModel } from './../Models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentaldetaildtoService {

  apiUrl = "https://localhost:44310/api/"
  constructor(private httpClient: HttpClient) { }

  getRentalDetailDto(): Observable<ListResponseModel<RentalDetailDto>> {
    let newPath = this.apiUrl + "rentals/getrentaldetails"
    return this.httpClient.get<ListResponseModel<RentalDetailDto>>(newPath)
  };
}
