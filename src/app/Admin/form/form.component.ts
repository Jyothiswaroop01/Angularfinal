import { Component } from '@angular/core';
import { MyserviceService } from '../../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  Sharedobj: any;
  Name:string = "";
  Desc:string = "";
  Price:string = "";
  id:any="";
  Image:string = "";

  constructor(public serviceobj: MyserviceService, public router:Router){}
  ngOnInit():void{
    this.Sharedobj = this.serviceobj.getSharedData()
    console.log(this.Sharedobj);
    this.Name = this.Sharedobj.Name;
    this.Desc = this.Sharedobj.Desc;
    this.Price = this.Sharedobj.Price;
    this.id = this.Sharedobj.id;
    this.Image = this.Sharedobj.Image;
    
  }
  
  //Sharedobj.name : string = '';

  onSubmit(form:any){
    console.log(form.value);
    if(form.valid){
      this.serviceobj.updateproduct(form.value).subscribe(res => {
        this.router.navigate(['adminproduct']);
      }, err => {
      })
    }
  }
  Cancel(){
    this.router.navigate(['adminproduct'])
  }
}
