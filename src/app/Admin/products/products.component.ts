import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  items: any[] = [];
  selectedProduct: any;
  Sharedobj : any;

  constructor(public serviceobj:MyserviceService, public router:Router,private location: Location) { }

  
  imgurl = 'https://th.bing.com/th/id/R.2a42d7b274bb96d8cc0976555277bea8?rik=78P3LjqrXSkA5Q&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon%2fcool-profile-icons-69.png&ehk=wSrAuMrucfij0k%2bWLPOJBjzoYz1%2bz4pIUyFZ44rWOzg%3d&risl=&pid=ImgRaw&r=0';

  profileClick(){
    this.router.navigate(['Adminprofile']);
  }
  addProduct(){
    this.router.navigate(['addproduct'])
  }
  Quires(){}

  ngOnInit(): void {
    this.serviceobj.getproductdata().subscribe(data => {
      console.log(data);
      this.items = data;
    });
  }
  getProductDetails(productId: number) {
    this.serviceobj.getProductById(productId).subscribe(
      (data: any) => {
        this.selectedProduct = data;
      },
      (      error: any) => {
        console.error(error);
      }
    );
  }
  updateItem(Data:any){
    this.serviceobj.setSharedData(Data);
    this.router.navigate(['form']);
  }
  deleteItem(productId:number){
    this.serviceobj.removeproduct(productId).subscribe(res=>{
      alert('Product Deleted Sucessfully');
      this.ngOnInit();
    },err=>{
      alert('unable to delete the record');
    })
  }
  logout() {
    this.router.navigate(['/login']);
    this.location.replaceState('/');
  }
}