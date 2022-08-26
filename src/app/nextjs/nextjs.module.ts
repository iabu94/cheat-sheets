import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NextjsRoutingModule } from './nextjs-routing.module';
import { NextjsComponent } from './nextjs.component';


@NgModule({
  declarations: [
    NextjsComponent
  ],
  imports: [
    CommonModule,
    NextjsRoutingModule
  ]
})
export class NextjsModule { }
