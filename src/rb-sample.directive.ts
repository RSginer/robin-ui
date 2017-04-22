import { Directive, ElementRef } from '@angular/core';
/**
 * Sample directive
 */
@Directive({
  selector: '[rbSampleDirective]'
})
export class RBSampleDirective {

  constructor(private el: ElementRef) {
  }

}
