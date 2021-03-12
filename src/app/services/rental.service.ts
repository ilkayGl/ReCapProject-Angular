import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { rentalResponseModel } from '../Models/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44310/api/rentals/getall"
  constructor(private httpClient: HttpClient) { }

  getRentals(): Observable<rentalResponseModel> {
    return this.httpClient.get<rentalResponseModel>(this.apiUrl)
  };
}
