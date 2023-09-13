import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { ContactComponent } from './User/contact/contact.component';
import { ProductComponent } from './User/product/product.component';
import { CartComponent } from './User/cart/cart.component';
import { FormComponent } from './Admin/form/form.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './Admin/products/products.component';
import { CreateComponent } from './Admin/create/create.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './User/profile/profile.component';
import { AdminprofileComponent } from './Admin/adminprofile/adminprofile.component';
import { PaymentComponent } from './User/payment/payment.component';
import { OrdersComponent } from './User/orders/orders.component';
import { DashboardAuthentication } from './secure';
import { DashboardAuthentication1 } from './secure1';
import { LandingComponent } from './async/landing/landing.component';

const routes: Routes = [
  {path: '', redirectTo: '/Async', pathMatch: 'full' },
  {path:'contact', component:ContactComponent, canActivate:[DashboardAuthentication]},
  {path:'cart', component:CartComponent, canActivate:[DashboardAuthentication],},
  {path:'product', component:ProductComponent, canActivate:[DashboardAuthentication]},
  {path:'form', component:FormComponent},
  {path:'login', component:LoginComponent},
  {path:'adminproduct', component:ProductsComponent, canActivate:[DashboardAuthentication1]},
  {path:'addproduct', component:CreateComponent, canActivate:[DashboardAuthentication1]},
  {path:'register', component:RegisterComponent},
  {path:'profile', component:ProfileComponent, canActivate:[DashboardAuthentication]},
  {path:'Adminprofile', component:AdminprofileComponent, canActivate:[DashboardAuthentication1]},
  {path:'payment', component:PaymentComponent, canActivate:[DashboardAuthentication]},
  {path:'orders', component:OrdersComponent},
  {path:'landing', component:LandingComponent},
  { path: 'details', loadChildren: () => import('./details/details.module').then(m => m.DetailsModule) },
  { path: 'Async', loadChildren: () => import('./async/async.module').then(m => m.AsyncModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
