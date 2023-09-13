import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  user: any = {};
  Sharedobj: any;
  Name:string = "";
  Desc:string = "";
  Price:string = "";
  id:any="";
  Image:string = "";
  OrderStatus:string ="";

  constructor(public serviceobj: MyserviceService, public router:Router){}
  ngOnInit():void{
    this.Sharedobj = this.serviceobj.getSharedData()
    console.log(this.Sharedobj);
    this.Name = this.Sharedobj.Name;
    this.Desc = this.Sharedobj.Desc;
    this.Price = this.Sharedobj.Price;
    this.id = this.Sharedobj.id;
    this.Image = this.Sharedobj.Image;
    this.OrderStatus = 'Pending';
  }
  onSubmit(addorder:any){
    if(addorder.valid){
      this.serviceobj.addorder(addorder.value).subscribe(res => {
        this.serviceobj.removecart(this.Sharedobj.id).subscribe(res=>{
          alert('Order Placed Sucessfully')
          this.router.navigate(['product']);
        },err=>{});
      }, err => {
      })
    }
  }
}
