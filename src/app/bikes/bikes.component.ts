import { Component, OnInit } from '@angular/core';
import{ bikes } from 'src/app/models/bikes.model'

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})

export class BikesComponent implements OnInit {
  bikes = bikes
  constructor() { }

  ngOnInit(): void {
  }
  share(){
    alert("The product has been shared!")
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
