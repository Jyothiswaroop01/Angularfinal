import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyserviceService } from '../../myservice.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  name:string="";
  email:string="";
  Phonenumber:string="";
  Comment:string="";

  constructor(public serviceobj: MyserviceService, public router:Router, public location:Location)
  {
  }

  imgurl = 'https://th.bing.com/th/id/R.2a42d7b274bb96d8cc0976555277bea8?rik=78P3LjqrXSkA5Q&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon%2fcool-profile-icons-69.png&ehk=wSrAuMrucfij0k%2bWLPOJBjzoYz1%2bz4pIUyFZ44rWOzg%3d&risl=&pid=ImgRaw&r=0';

  contactClick(){
    this.router.navigate(['contact']);
  }
  productClick(){
    this.router.navigate(['product']);
  }
  cartClick(){
    this.router.navigate(['cart']);
  }

  onSubmit(form: any) {
    if (form.valid) {
      this.serviceobj.registerUser(form.value).subscribe(res => {
        alert('Submitted Successfully');
      }, err => {
      })
    }
    else{
      alert('enter every Details')
    }
  }
  logout() {
    this.router.navigate(['/login']);
    this.location.replaceState('/');
  }
}
