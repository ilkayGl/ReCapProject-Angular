import { Customer } from './../Models/customer';
import { ListResponseModel } from './../Models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = "https://localhost:44310/api/"
  constructor(private httpClient: HttpClient) { }

  getCustomers(): Observable<ListResponseModel<Customer>> {
    let newPath = this.apiUrl + "customers/getall"
    return this.httpClient.get<ListResponseModel<Customer>>(newPath)
  };
}
