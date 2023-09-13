import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from './User/popup/popup.component';



@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  url:any = 'http://localhost:3000/Data';
  url1:any = 'http://localhost:3000/Login';
  url2:any = 'http://localhost:3000/Contact';
  url3:any = 'http://localhost:3000/Cart';
  url4:any = 'http://localhost:3000/Orders';

  constructor(private objhttp:HttpClient, public router:Router, private dialog: MatDialog) { 
    this.loadData();
  }
  openPopup() {
    this.dialog.open(PopupComponent);
  }

  public sharedData?:any;
  private dataArray: any[] = [];
  private loggedInUser: any[] = []; 
  public userData:any[]=[];

  private loadData() {
    this.objhttp.get<any[]>(this.url1).subscribe(
      (data) => {
        this.dataArray = data;
      },
      (error) => {
        console.error('Error loading data:', error);
      }
    );
  }

  registerUser(data:any)
  {
    return this.objhttp.post<any>(this.url2,data);
  }
  login(email: string, password: string): boolean {
    const user = this.dataArray.find(u => u.email === email && u.password === password);
    if (user) {
      if(user.role == "admin")
      {
        this.loggedInUser = user
        sessionStorage.setItem("Uname", user.fullName);
        this.router.navigate(['adminproduct'])
      }
      else{
        this.loggedInUser = user
        sessionStorage.setItem("Uname", user.fullName);
        this.router.navigate(['product'])
      }
      return true;
    }
    return false;
  }
  getLoggedInUser() {
    return this.loggedInUser;
  }

  loggedIn():any
  {
    return sessionStorage.getItem("Uname")
  }
  AdminloggedIn():any
  {
    return sessionStorage.getItem("Uname")
  }



  getproductdata()
  {
    return this.objhttp.get<any[]>(this.url);
  }
  addproductdata(temp:any)
  {
      return this.objhttp.post<any>(this.url,temp);
  }
  getProductById(id: number): Observable<any> {
    return this.objhttp.get(this.url+'/'+id);
  }
  updateproduct(data: any): Observable<any> {
    console.log(data)
    const url = `${this.url}/${data.id}`;
    return this.objhttp.put(url, data);
  }
  removeproduct(id: number): Observable<any> 
  {
    return this.objhttp.delete<any>(this.url+'/' + id);
  }



  addproduct(temp:any)    //Adding to cart
  {
    return this.objhttp.post<any>(this.url3,temp);
  }
  getcartdata()
  {
    return this.objhttp.get<any[]>(this.url3);
  }
  removecart(id:any)
  { 
    console.log(id);
    return this.objhttp.delete<any>(this.url3+'/' + id);
  }

  setSharedData(data: any) {
    this.sharedData = data; 
  }

  getSharedData(): any{
    return this.sharedData;
  }

  getUserData(){
    return this.loggedInUser;
  }

  addUser(user: any) : Observable<any>
  {
    return this.objhttp.post<any>(this.url1,user);
  }
  addorder(data:any) : Observable<any>
  {
    return this.objhttp.post<any>(this.url4,data);
  }

  getallorders()
  {
    return this.objhttp.get(this.url4);
  }
  getordersById(id: number): Observable<any>
  {
    return this.objhttp.get(this.url4+'/'+id);
  }
  }