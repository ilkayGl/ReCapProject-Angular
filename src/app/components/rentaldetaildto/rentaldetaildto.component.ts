import { Component, OnInit } from '@angular/core';
import { RentalDetailDto } from 'src/app/Models/rentalDetailDto';
import { RentaldetaildtoService } from 'src/app/services/rentaldetaildto.service';

@Component({
  selector: 'app-rentaldetaildto',
  templateUrl: './rentaldetaildto.component.html',
  styleUrls: ['./rentaldetaildto.component.css']
})
export class RentaldetaildtoComponent implements OnInit {

  rentaldetaildto: RentalDetailDto[] = [];
  dataLoaded = false;
  constructor(private rentaldetaildtoService: RentaldetaildtoService) { }

  ngOnInit(): void {
    this.getRentalDetailDto();
  }

  getRentalDetailDto() {
    this.rentaldetaildtoService.getRentalDetailDto().subscribe(response => {
      this.rentaldetaildto = response.data
      this.dataLoaded = true;
    });
  }

}
