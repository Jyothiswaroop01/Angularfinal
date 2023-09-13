import { Component } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  constructor(public serviceObj: MyserviceService){}
  orders: any = '';
  selectedProduct:any='';
  ngOnInit():void{
    this.serviceObj.getallorders().subscribe(data=>{
      this.orders = data;
    },err=>{});
  }
  getOrderDetails(productId: number) {
    this.serviceObj.getordersById(productId).subscribe(
      (data: any) => {
        this.selectedProduct = data;
      },
      (      error: any) => {
        console.error(error);
      }
    );
  }
}
