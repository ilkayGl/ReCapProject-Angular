import { Component, OnInit } from '@angular/core';
import { CarRentalDetail } from 'src/app/models/carRentalDetail';
import { CarRentalDetailService } from 'src/app/services/carrentaldetail.service';

@Component({
  selector: 'app-carrentaldetail',
  templateUrl: './carrentaldetail.component.html',
  styleUrls: ['./carrentaldetail.component.css']
})
export class CarrentaldetailComponent implements OnInit {

  carRentalDetails: CarRentalDetail[]= [];
  dataLoaded=false;


  constructor(private carRentalDetailService: CarRentalDetailService) { }

  ngOnInit(): void {
    this.getCarRentalDetails();
  }

  getCarRentalDetails(){
    this.carRentalDetailService.getCarRentalDetails().subscribe(response =>{
      this.carRentalDetails=response.data;
      this.dataLoaded=true;

    })
  }

}
