import { Component, OnInit } from '@angular/core';
import { Config } from 'src/app/models/config';
import { Car } from 'src/app/models/car.model';

@Component({
  selector: 'cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
 public title : string
 public description : string
 public brands : string[]
 public cars : Array<Car>
 public newCar : string

  constructor() {
    this.title = Config.title
    this.description = Config.desciption
    this.brands = []
    this.newCar= ""
    this.cars = [
      new Car("Ford", "Focus", "White", 4500, true),
      new Car("Tesla", "Fx-5", "Red", 9500, true),
      new Car("Dacia", "Sandero", "Blue", 1100, false),
      new Car("Opel", "Zafira", "Green", 8700, true)
    ]
   }

  ngOnInit(): void {
  }
  addCar(){
    this.brands.push(this.newCar)
  }
  deleteCar(index: number){
    this.cars.splice(index, 1)
  }
}
