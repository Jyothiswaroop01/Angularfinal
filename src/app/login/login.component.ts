import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:any="";
  password:any="";
  constructor(private router:Router, public objservice:MyserviceService){}

  onSubmit() {
    console.log(this.email,this.password)
    if (this.objservice.login(this.email, this.password)) {
      console.log('LoggedIn')
    } else {
      alert('Incorrect Details');
    }
  }
}