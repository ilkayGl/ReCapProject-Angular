import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ColorComponent } from './components/color/color.component';
import { NaviComponent } from './components/navi/navi.component';
import { HttpClientModule } from '@angular/common/http';
import { CardetaildtoComponent } from './components/cardetaildto/cardetaildto.component';

import { BranddetaildtoComponent } from './components/branddetaildto/branddetaildto.component';
import { RentaldetaildtoComponent } from './components/rentaldetaildto/rentaldetaildto.component';




@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ColorComponent,
    NaviComponent,
    CardetaildtoComponent,
    BranddetaildtoComponent,
    RentaldetaildtoComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
