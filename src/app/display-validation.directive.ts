import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDisplayValidation]'
})
export class DisplayValidationDirective {

  constructor(el: ElementRef) { 
    
  }

}
