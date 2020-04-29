import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ViewMessageComponent } from './view-message/view-message.component';
import { OutOfRangeComponent } from './out-of-range/out-of-range.component';
import { ViewMessageAttemptComponent } from './view-message-attempt/view-message-attempt.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'message', component: ViewMessageAttemptComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ViewMessageAttemptComponent,
    ViewMessageComponent,
    OutOfRangeComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    [RouterModule.forRoot(routes)],
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
