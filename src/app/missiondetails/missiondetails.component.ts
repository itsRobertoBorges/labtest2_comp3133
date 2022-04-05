import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service'
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  constructor(private apiService: ApiService, private route:ActivatedRoute) {}
  flight_details;
  ngOnInit(): void {
    this.getID();
  }
  getID(){

    const flight_number =+ this.route.snapshot.paramMap.get('id');
    this.apiService.getDataByID(flight_number).subscribe((data)=>{
      this.flight_details= data;
      console.log(this.flight_details);

    });
  }
}