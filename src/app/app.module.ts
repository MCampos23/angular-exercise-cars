import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';

import { CarsComponent } from './cars/cars.component';
import { ContactComponent } from './contact/contact.component';
import { BikesComponent } from './bikes/bikes.component';
import { BikesAlertsComponent } from './bikes-alerts/bikes-alerts.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    ContactComponent,
    BikesComponent,
    BikesAlertsComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
