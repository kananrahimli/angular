import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ExampleDirectiveDirective } from 'src/app/directives/example-directive.directive';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
  providers:[{provide:'provideToken',useValue:'ChildComponent Dependency'}]
})
export class ChildComponentComponent {
  text!:string
  @ViewChild('input',{static:true,read:ElementRef})_input!:ElementRef
  @ViewChild('input',{static:true,read:NgModel})_input2!:NgModel
  @ViewChild('input',{static:true,read:ExampleDirectiveDirective})_input3!:ExampleDirectiveDirective
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this._input ,'ElementRef');
    console.log(this._input2 ,'Directive');
    console.log(this._input3.console() ,'CustomDirective');
  }
}
