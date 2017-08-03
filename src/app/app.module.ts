import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { UsMapModule } from './us-map/us-map.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
