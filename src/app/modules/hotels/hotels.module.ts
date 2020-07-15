import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelsHomeComponent } from './components/hotels-home/hotels-home.component';


@NgModule({
  declarations: [HotelsHomeComponent],
  imports: [
    CommonModule,
    HotelsRoutingModule
  ]
})
export class HotelsModule { }
