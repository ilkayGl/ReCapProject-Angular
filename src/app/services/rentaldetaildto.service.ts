import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { rentalDetailDtoResponseModel } from '../Models/rentalDetailDtoResponseModel';


@Injectable({
  providedIn: 'root'
})
export class RentaldetaildtoService {

  apiUrl = "https://localhost:44310/api/rentals/getrentaldetails"
  constructor(private httpClient: HttpClient) { }

  getRentalDetailDto(): Observable<rentalDetailDtoResponseModel> {
    return this.httpClient.get<rentalDetailDtoResponseModel>(this.apiUrl)
  };
}
