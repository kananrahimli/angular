import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponentComponent } from './components/child-component/child-component.component';
import { FormsModule } from '@angular/forms';
import { ExampleDirectiveDirective } from './directives/example-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    ExampleDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
