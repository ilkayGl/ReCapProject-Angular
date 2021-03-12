import { CarDetailDto } from './../../Models/carDetailDto';
import { Component, OnInit } from '@angular/core';
import { CardetaildtoService } from 'src/app/services/cardetaildto.service';

@Component({
  selector: 'app-cardetaildto',
  templateUrl: './cardetaildto.component.html',
  styleUrls: ['./cardetaildto.component.css']
})
export class CardetaildtoComponent implements OnInit {

  cardetaildto: CarDetailDto[] = [];
  dataLoaded = false;
  constructor(private cardetaildtoService: CardetaildtoService) { }

  ngOnInit(): void {
    this.getCarDetailDto();
  }

  getCarDetailDto() {
    this.cardetaildtoService.getCarDetailDto().subscribe(response => {
      this.cardetaildto = response.data
      this.dataLoaded = true;
    });
  }

}
