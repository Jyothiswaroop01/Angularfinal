import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(public serviceobj: MyserviceService, public router:Router){}
  Name:string = "";
  Desc:string = "";
  Price:string = "";
  id:any="";
  img:string = "";

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form data:', form.value);
      this.serviceobj.addproductdata(form.value).subscribe(res => {
        this.router.navigate(['adminproduct'])
      }, err => {
      })
    }
    else{
      alert('enter every Details')
    }
  }
  Cancel(){
    this.router.navigate(['adminproduct'])
  }
}
