import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { colorResponseModel } from '../Models/colorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl = "https://localhost:44310/api/colors/getall"
  constructor(private httpClient: HttpClient) { }

  getColors(): Observable<colorResponseModel> {
    return this.httpClient.get<colorResponseModel>(this.apiUrl)
  };
}
