import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service'

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  flights;
  ngOnInit(): void {
    this.apiService.getData().subscribe((data)=>{
      this.flights= data;
    });
  }

}