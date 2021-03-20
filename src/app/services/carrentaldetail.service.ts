import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarRentalDetail } from '../models/carRentalDetail';
import { ListResponseModel } from '../models/listReponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarRentalDetailService {

  apiUrl= environment.apiUrl + 'rentals/getrentaldetails';

  constructor(private httpClient: HttpClient) { }

  getCarRentalDetails(): Observable<ListResponseModel<CarRentalDetail>>{
    return this.httpClient.get<ListResponseModel<CarRentalDetail>>(this.apiUrl);
  }
}
