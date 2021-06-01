import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bike, bikes} from '../models/bikes.model'

@Component({
  selector: 'app-bike-details',
  templateUrl: './bike-details.component.html',
  styleUrls: ['./bike-details.component.css']
})
export class BikeDetailsComponent implements OnInit {
  bike : Bike | undefined
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('bikeId'));

  // Find the product that correspond with the id provided in route.
  this.bike = bikes.find(bike => bike.id === productIdFromRoute);
  }

}
