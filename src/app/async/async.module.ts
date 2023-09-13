import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsyncRoutingModule } from './async-routing.module';
import { AsyncComponent } from './async.component';
import { LandingComponent } from './landing/landing.component';



@NgModule({
  declarations: [
    AsyncComponent,
    LandingComponent,
  ],
  imports: [
    CommonModule,
    AsyncRoutingModule
  ]
})
export class AsyncModule { }
