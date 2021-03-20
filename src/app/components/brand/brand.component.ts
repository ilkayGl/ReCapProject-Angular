import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { CarDetail } from 'src/app/models/carDetail';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  currentBrand: Brand;
  dataLoaded = false;
  carDetails: CarDetail[] = [];

  constructor(
    private brandService: BrandService,
    private carService: CarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getBrands();
  }



  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }

  getAllCars() {
    this.carService.getCarDetails().subscribe((response) => {
      this.carDetails = response.data;
    });
    this.currentBrand = { brandId: 0, brandName: "" }
    // aşağıda yapılmak istenen, All Cars a tıklandığında, menüdeki seçili öğelerin aktivasyonu durdurulur.(mavi olarak seçili kalmasını engeller.)
    console.log("tetiklenme işlemi gerçekleşiyor.");
    this.brandService.statusUpdated.emit(); // componentler arasında iletişim kurmayı sağlar. Bu metot tetiklendiğinde, color component in constructor ı  içerisindeki metot tetiklenir. böylelikle iki component arasında iletişim kurulmuş olur.
  }

  setCurrentBrand(brand: Brand) {
    this.currentBrand = brand;
  }

  getCurrentBrandClass(brand: Brand) {
    if (brand == this.currentBrand) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
  doFilter(brand: Brand) {
    this.currentBrand = brand;
    this.router.navigate([''], { queryParams: { brandId: brand.brandId }, queryParamsHandling: "merge" });
  }


}
