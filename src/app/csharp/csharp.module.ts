import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CsharpRoutingModule } from './csharp-routing.module';
import { CsharpComponent } from './csharp.component';


@NgModule({
  declarations: [
    CsharpComponent
  ],
  imports: [
    CommonModule,
    CsharpRoutingModule
  ]
})
export class CsharpModule { }
