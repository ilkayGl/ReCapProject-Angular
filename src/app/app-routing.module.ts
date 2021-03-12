import { CardetaildtoComponent } from './components/cardetaildto/cardetaildto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { BranddetaildtoComponent } from './components/branddetaildto/branddetaildto.component';
import { RentaldetaildtoComponent } from './components/rentaldetaildto/rentaldetaildto.component';


const routes: Routes = [
  { path: 'car', component: CardetaildtoComponent, },
  { path: 'brand', component: BranddetaildtoComponent },
  { path: 'color', component: ColorComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'rental', component: RentaldetaildtoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
