import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SelectDirective } from './select.directive';

@NgModule({
  declarations: [
    SelectDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SelectDirective
  ]
})
export class SharedModule { }
