import { Directive } from '@angular/core';

@Directive({
  selector: '[appExampleDirective]'
})
export class ExampleDirectiveDirective {

  constructor() { 
    // console.log('');
    
  }

  console(){
    console.log("Directive is work");
    
  }
  

}
