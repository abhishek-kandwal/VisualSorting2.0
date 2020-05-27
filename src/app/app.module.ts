import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material';

import { AppComponent } from './app.component';
import { ControllerComponent } from './controller/controller.component';
import { SortingboardComponent } from './sortingboard/sortingboard.component';
import { BarsComponent } from './bars/bars.component';
import { HeaderComponent } from './common/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ControllerComponent,
    SortingboardComponent,
    BarsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
