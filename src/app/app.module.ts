import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './User/contact/contact.component';
import { FormsModule} from '@angular/forms';
import { MyserviceService } from './myservice.service';
import { ProductComponent } from './User/product/product.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CartComponent } from './User/cart/cart.component';
import { FormComponent } from './Admin/form/form.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './Admin/products/products.component';
import { CreateComponent } from './Admin/create/create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table'
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RegisterComponent } from './register/register.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { ProfileComponent } from './User/profile/profile.component';
import { AdminprofileComponent } from './Admin/adminprofile/adminprofile.component';
import { PaymentComponent } from './User/payment/payment.component';
import { OrdersComponent } from './User/orders/orders.component';
import { HeaderComponent } from './User/header/header.component';
import { DashboardAuthentication } from './secure';
import { DashboardAuthentication1 } from './secure1';
import { PopupComponent } from './User/popup/popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FilterByCategoryPipe } from './filter-by-category.pipe';
import { InterceptorInterceptor } from './interceptor.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ProductComponent,
    CartComponent,
    FormComponent,
    LoginComponent,
    ProductsComponent,
    CreateComponent,
    RegisterComponent,
    ProfileComponent,
    AdminprofileComponent,
    PaymentComponent,
    OrdersComponent,
    HeaderComponent,
    PopupComponent,
    FilterByCategoryPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatRadioModule,
    MatDialogModule
  ],
  providers: [MyserviceService, DashboardAuthentication, DashboardAuthentication1, {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
