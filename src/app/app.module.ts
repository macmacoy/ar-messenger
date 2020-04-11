import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { ViewMessageComponent } from './view-message/view-message.component';
import { OutOfRangeComponent } from './out-of-range/out-of-range.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewMessageComponent,
    OutOfRangeComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
