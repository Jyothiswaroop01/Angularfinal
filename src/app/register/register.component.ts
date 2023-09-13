import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user: any = {};
  constructor(public serviceObj: MyserviceService, public router:Router){};
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form data:', form.value);
      this.serviceObj.addUser(form.value).subscribe(res=>{
        alert('Account Created Sucessfully');
        this.router.navigate(['login']);
      },
        err=>{
          alert('something went wrong')
      });
    }
    else{
      alert('enter every Details')
    }
  }
  loginClick(){
    this.router.navigate(['login']);
  }
}