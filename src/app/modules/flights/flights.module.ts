import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightsRoutingModule } from './flights-routing.module';
import { FlighsHomeComponent } from './components/flighs-home/flighs-home.component';


@NgModule({
  declarations: [FlighsHomeComponent],
  imports: [
    CommonModule,
    FlightsRoutingModule
  ]
})
export class FlightsModule { }
