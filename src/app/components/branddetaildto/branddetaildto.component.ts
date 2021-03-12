import { Component, OnInit } from '@angular/core';
import { BrandDetailDto } from 'src/app/Models/brandDetailDto';
import { BranddetaildtoService } from 'src/app/services/branddetaildto.service';

@Component({
  selector: 'app-branddetaildto',
  templateUrl: './branddetaildto.component.html',
  styleUrls: ['./branddetaildto.component.css']
})
export class BranddetaildtoComponent implements OnInit {

  branddetaildto: BrandDetailDto[] = [];
  dataLoaded = false;
  constructor(private branddetaildtoService: BranddetaildtoService) { }

  ngOnInit(): void {
    this.getBrandDetailDto();
  }

  getBrandDetailDto() {
    this.branddetaildtoService.getBrandDetailDto().subscribe(response => {
      this.branddetaildto = response.data
      this.dataLoaded = true;
    });
  }

}
