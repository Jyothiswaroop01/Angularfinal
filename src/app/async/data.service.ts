import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private router:Router) { }
 
  getData(): Promise<string> {
    return new Promise<string>(() => {
        this.router.navigate(['landing'])
    });
  }

  modifiedData(): Promise<string> {
    return new Promise<string>(() => {
      setTimeout(() => {
        this.router.navigate(['login'])
      }, 5000);
    });
  }
}