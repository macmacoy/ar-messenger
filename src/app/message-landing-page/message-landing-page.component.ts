import { Component, OnInit } from '@angular/core';
import { MessageServiceService, User } from '../message-service/message-service.service';
import { Message } from '../message-service/message-service.service';
import { LocationServiceService } from '../location-service/location-service.service';
import { Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';
declare  var mapkit:  any;

@Component({
  selector: 'app-message-landing-page',
  templateUrl: './message-landing-page.component.html',
  styleUrls: ['./message-landing-page.component.scss']
})
export class MessageLandingPageComponent implements OnInit {

  // approximately a quarter mile
  maxLongitudeDiff = 0.004;
  maxLatitudeDiff = 0.004;

  isiPhone = true;
  inRange = true;
  loading = true;
  messageId: string;
  message: Message;
  mapsLink: string;

  user: User;

  constructor(
    private messageService: MessageServiceService,
    private locationService: LocationServiceService,
    private router: Router,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.checkIfiPhone();
    this.setMessage();
  }

  checkIfiPhone() {
    if (!navigator.userAgent.includes('iPhone')) {
      this.isiPhone = false;
    }
  }

  setMessage() {
    this.messageService.getMessage(this.messageId).subscribe(message => {
      this.message = message;
      this.user = message.user;
      this.makeMap();
      this.loading = false;
      this.mapsLink = `http://maps.apple.com/?q=${this.user.first_name}'s Message&ll=${message.latitude},${message.longitude}`;
    });
  }

  imHereClicked() {
    this.router.navigate([`/viewMessage`], {queryParams: {id: this.message.id}});
  }

  makeMap() {
    // localhost token
    // let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6IlpCTFVDOEZTN0cifQ.eyJpc3MiOiJIU0tDUTIzM0Q3IiwiaWF0IjoxNTkzMjg2NzA5LCJleHAiOjE2MjQ4NDM2NjEsIm9yaWdpbiI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJ9.aCNxDRD_UFQoyUgXzYe7ABjCgyCErY_0fIvWAWGUSY1q06wgsQlAHf8XQztt4vdH7GUEhBaRt9_HcXmsZo09eg";
    // cloudfront token
    // let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6IlpCTFVDOEZTN0cifQ.eyJpc3MiOiJIU0tDUTIzM0Q3IiwiaWF0IjoxNTkzMjkwNDM3LCJleHAiOjE2MjQ4NDczODksIm9yaWdpbiI6Imh0dHBzOi8vZDNvM3g3N2RqZ3BtNGMuY2xvdWRmcm9udC5uZXQifQ.eEI6pARwymP2F1OHOORMkL7Z3Hxh3pP4rXXHze3_NBxQ5dsAZ6Y-GNGZoY0yI6IeW5Na7pCynqlNV94kx-zGJg"
    // tapestry.ar token
    let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6IlpCTFVDOEZTN0cifQ.eyJpc3MiOiJIU0tDUTIzM0Q3IiwiaWF0IjoxNjAxNTE0NDIzLCJleHAiOjE2MzMwNzEzNzUsIm9yaWdpbiI6Imh0dHBzOi8vdGFwZXN0cnkuYXIifQ.GkoGaiRpH4A_iTPB7UgwbsMR5StAgKHK_HzG9cfaRS0mlZ2H6yE2SXMg6vQhf9mi7l4UUfvGlkve68PudJmrbA"

    // authorize
    mapkit.init({
      authorizationCallback: function(done) {
          done(token);
      }
    });

    // make map
    var map = new mapkit.Map("map");

    // make marker for message location
    var MarkerAnnotation = mapkit.MarkerAnnotation, clickAnnotation;
    var messageLocation = new mapkit.Coordinate(+this.message.latitude, +this.message.longitude);
    var messageLocationAnnotation = new MarkerAnnotation(messageLocation);
    messageLocationAnnotation.color = "#969696"; 
    messageLocationAnnotation.title = `${this.user.first_name}'s Message`;
    messageLocationAnnotation.selected = "true";
    // messageLocationAnnotation.glyphText = "";
    
    // Add and show the annotation on the map
    map.showItems([messageLocationAnnotation]);

    // set the zoom level
    var messageLocationRadius = new mapkit.CoordinateRegion(
      new mapkit.Coordinate(+this.message.latitude, +this.message.longitude),
      new mapkit.CoordinateSpan(0.008, 0.008)
    );
    map.region = messageLocationRadius;
  }

}
