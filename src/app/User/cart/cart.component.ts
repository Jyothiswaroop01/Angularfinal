import { Component } from '@angular/core';
import { MyserviceService } from '../../myservice.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items: any[] = [];
  message:string = "";
  constructor(public serviceobj:MyserviceService, public router:Router, public location:Location) { }

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
  ngOnInit(): void {
    this.serviceobj.getcartdata().subscribe(data => {
      this.items = data;
      if(this.items.length == 0){
        this.message = "😢😢Sorry their are no products in the cart😢😢"
      }
    });
  }
  removeClick(id:any):void{
    this.serviceobj.removecart(id).subscribe(res=>{
      this.ngOnInit();
      alert('Item removed Sucessfully');
    },err=>{
      alert('unable to remove the record');
    })
  }
  logout() {
    this.router.navigate(['/login']);
    this.location.replaceState('/');
  }
  buyNow(data:any){
    this.serviceobj.setSharedData(data);
    this.router.navigate(['payment']);
  }
}