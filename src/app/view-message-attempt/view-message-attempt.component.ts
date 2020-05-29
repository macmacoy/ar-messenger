import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../message-service/message-service.service';
import { Message } from '../message-service/message-service.service';
import { LocationServiceService } from '../location-service/location-service.service';

@Component({
  selector: 'app-view-message-attempt',
  templateUrl: './view-message-attempt.component.html',
  styleUrls: ['./view-message-attempt.component.scss']
})
export class ViewMessageAttemptComponent implements OnInit {

  // approximately a quarter mile
  maxLongitudeDiff = 0.004;
  maxLatitudeDiff = 0.004;

  isiPhone = true;
  inRange = true;
  loading = true;
  messageId: string;
  message: Message;

  constructor(
    private messageService: MessageServiceService,
    private locationService: LocationServiceService
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
      this.setInRange();
      this.loading = false;
    });
  }

  setInRange() {
    this.locationService.getPosition().then(pos => {
      this.inRange = (
        Math.abs(+this.message.longitude - +pos.lng) < this.maxLongitudeDiff &&
        Math.abs(+this.message.latitude - +pos.lat) < this.maxLatitudeDiff
      );
      console.log(String(pos.lng));
      console.log(String(pos.lat));
    });
  }

}
