import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { CarsComponent } from 'src/app/cars/cars.component'
import { ContactComponent } from 'src/app/contact/contact.component'
const routes: Routes = [
    { path: 'cars', component: CarsComponent },
    { path: 'contact', component: ContactComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }