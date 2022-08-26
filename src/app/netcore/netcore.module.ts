import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetcoreRoutingModule } from './netcore-routing.module';
import { NetcoreComponent } from './netcore.component';


@NgModule({
  declarations: [
    NetcoreComponent
  ],
  imports: [
    CommonModule,
    NetcoreRoutingModule
  ]
})
export class NetcoreModule { }
