import { Component, ViewChild } from '@angular/core';
import { ChildComponentComponent } from './components/child-component/child-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(ChildComponentComponent,{static:true,read:'provideToken'})provider!:string
  title = 'viewChild';
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.provider);
    
  }
}
