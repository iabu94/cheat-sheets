import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MssqlRoutingModule } from './mssql-routing.module';
import { MssqlComponent } from './mssql.component';


@NgModule({
  declarations: [
    MssqlComponent
  ],
  imports: [
    CommonModule,
    MssqlRoutingModule
  ]
})
export class MssqlModule { }
