import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  message: string = '';
 

  constructor(private dataService: DataService,private router:Router) {
    this.newData();
  }
  
  async newData() {
  try {
    await this.dataService.modifiedData();
  } catch (error) {
  console.error(error);
  }
  }

}
