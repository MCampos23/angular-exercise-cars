import { Component, OnInit } from '@angular/core';
import { Config } from 'src/app/models/config';

@Component({
  selector: 'cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
 public title : string
 public description : string
 public cars : Array<string>
 public newCar : string

  constructor() {
    this.newCar= ""
    this.title = Config.title
    this.description = Config.desciption
    this.cars = ["Opel", "BMW", "Porsche", "Nissan"]
   }

  ngOnInit(): void {
  }
  addCar(){
    this.cars.push(this.newCar)
  }
  deleteCar(index: number){
    this.cars.splice(index, 1)
  }
}
