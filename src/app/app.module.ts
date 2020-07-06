import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ControllerComponent } from './controller/controller.component';
import { SortingboardComponent } from './sortingboard/sortingboard.component';
import { HeaderComponent } from './common/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterConsoleComponent } from './common/footer-console/footer-console.component';

@NgModule({
  declarations: [
    AppComponent,
    ControllerComponent,
    SortingboardComponent,
    HeaderComponent,
    FooterConsoleComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
