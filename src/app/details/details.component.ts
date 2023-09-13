import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  Sharedobj: any;
  item:any;
  constructor(public serviceobj: MyserviceService, public router:Router){}
  ngOnInit():void{
    this.Sharedobj = this.serviceobj.getSharedData()
    console.log(this.Sharedobj);
    this.serviceobj.getProductById(this.Sharedobj).subscribe(
      (data: any) => {
        this.item = data;
        console.log(this.item)
      },
      (      error: any) => {
        console.error(error);
      }
    );
  }

  Addtocart(data:any){
    console.log(data)
    this.serviceobj.addproduct(data).subscribe(res => {
      console.log(res);
      alert('Items Added Sucessfully');
      this.router.navigate(['product'])
    }, err => {

    })
  }
  Back(){
    this.router.navigate(['product'])
  }
}
