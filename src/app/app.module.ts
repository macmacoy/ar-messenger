import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ViewMessageComponent } from './view-message/view-message.component';
import { OutOfRangeComponent } from './out-of-range/out-of-range.component';
import { MessageLandingPageComponent } from './message-landing-page/message-landing-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NotIphoneComponent } from './not-iphone/not-iphone.component';
import { ViewMessageAttemptComponent } from './view-message-attempt/view-message-attempt.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { NoLocationAccessComponent } from './no-location-access/no-location-access.component'

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'message', component: MessageLandingPageComponent },
  { path: 'viewMessage', component: ViewMessageAttemptComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MessageLandingPageComponent,
    ViewMessageComponent,
    OutOfRangeComponent,
    NotIphoneComponent,
    ViewMessageAttemptComponent,
    HomePageComponent,
    PrivacyPolicyComponent,
    NoLocationAccessComponent
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
