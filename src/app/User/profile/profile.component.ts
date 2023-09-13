import { Component } from '@angular/core';
import { MyserviceService } from '../../myservice.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  fullName:string="";
  email:string="";
  password:string="";
  userdata:any;
  constructor(public objservice:MyserviceService, public router:Router, public location:Location){}
  imgurl = 'https://th.bing.com/th/id/R.2a42d7b274bb96d8cc0976555277bea8?rik=78P3LjqrXSkA5Q&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon%2fcool-profile-icons-69.png&ehk=wSrAuMrucfij0k%2bWLPOJBjzoYz1%2bz4pIUyFZ44rWOzg%3d&risl=&pid=ImgRaw&r=0';

  ngOnInit():void{
    this.userdata = this.objservice.getUserData();
    this.fullName = this.userdata.fullName;
    this.email = this.userdata.email;
    this.password = this.userdata.password;
  }
  contactClick(){
    this.router.navigate(['contact']);
  }
  productClick(){
    this.router.navigate(['product']);
  }
  cartClick(){
    this.router.navigate(['cart']);
  }
  profileClick(){
    this.router.navigate(['profile']);
  }
  orderClick(){
    this.router.navigate(['orders'])
  }
  logout() {
    this.router.navigate(['/login']);
    this.location.replaceState('/');
  }

}
