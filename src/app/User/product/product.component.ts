import { Component } from '@angular/core';
import { MyserviceService } from '../../myservice.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  items: any[] = [];
  selectedProduct: any;
  Sharedobj : any;

  fullName:string="";
  email:string="";
  password:string="";
  userdata:any;
  selectedCategory: string | undefined = undefined; 


  currentIndex = 0;
  showSlides() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000); // Change slide every 3 seconds (adjust as needed)
  }
  constructor(public serviceobj:MyserviceService, public router:Router,private location: Location) {
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

  images: string[] = [
    'https://www.mailtimes.com.au/images/transform/v1/crop/frm/JbL8dJ5dh2XzNFST9PPkaJ/fccc5627-ac8d-4bc1-bbf5-a5ec70e528a3.jpg/r0_0_1100_455_w1200_h678_fmax.jpg',
    'https://media.istockphoto.com/id/504102138/vector/big-sale-50-percent-6250x2500-pixel-banner.jpg?s=170667a&w=0&k=20&c=AfYOn2Bvp3gHDorvJ55gL0-Z_8zcs5lsyYFLuiECsYQ=',
    'https://cf.shopee.com.my/file/8ce28d79ed1ceebaf18a5ff562b92437',
  ];

  ngOnInit(): void {
    this.showSlides();
    this.userdata = this.serviceobj.getUserData();
    this.fullName = this.userdata.fullName;
    this.serviceobj.getproductdata().subscribe(data => {
      this.items = data;
    });
  }

  filterProductsByCategory(category: string) {
    this.selectedCategory = category;
  }

  
  Addtocart(data:any){
    console.log(data)
    this.serviceobj.addproduct(data).subscribe(res => {
      console.log(res);
      this.serviceobj.openPopup();
      
    }, err => {

    })
  }
  getProductDetails(productId: number) {
    this.serviceobj.setSharedData(productId);
    this.router.navigate(['details']);
  }
  logout() {
    this.router.navigate(['/login']);
    this.location.replaceState('/');
    sessionStorage.removeItem("Uname");
  }
  Mobile(){}
}