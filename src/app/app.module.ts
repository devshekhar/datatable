import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {MainservicesService} from './services/mainservices.service';
import {DateFormatPipe} from './Pipe/datepipe';

@NgModule({
  declarations: [
    AppComponent
   
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    DateFormatPipe,
    MainservicesService,
   // StartsWithPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
