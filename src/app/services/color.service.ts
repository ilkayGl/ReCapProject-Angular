import { Color } from './../Models/color';
import { ListResponseModel } from './../Models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl = "https://localhost:44310/api/";
  constructor(private httpClient: HttpClient) { }

  getColors(): Observable<ListResponseModel<Color>> {
    let newPath = this.apiUrl + "colors/getall"
    return this.httpClient.get<ListResponseModel<Color>>(newPath)
  };
}
