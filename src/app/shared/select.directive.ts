import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[dhSelect]'
})
export class SelectDirective {

  constructor(private element: ElementRef) {
  }

  @HostListener('click') onClick() {
    this.element.nativeElement.select();
  }
}
