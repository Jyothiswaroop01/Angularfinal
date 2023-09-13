import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent {
  
  message: string = '';
  constructor(private dataService: DataService, private router: Router) {
    this.loadingData();
  }

  async loadingData() {
    try {
      this.message = await this.dataService.getData();
    } catch (error) {
      console.error(error);
    }
  }
}