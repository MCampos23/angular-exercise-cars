import { Component, OnInit } from '@angular/core';
import {Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Bike } from 'src/app/models/bikes.model'

@Component({
  selector: 'app-bikes-alerts',
  templateUrl: './bikes-alerts.component.html',
  styleUrls: ['./bikes-alerts.component.css']
})
export class BikesAlertsComponent implements OnInit {
  @Input() bike!: Bike
  @Output() notify = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

}
