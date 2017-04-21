import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[rbSampleDirective]'
})
export class RBSampleDirective {

  constructor(private el: ElementRef) {
  }

}
