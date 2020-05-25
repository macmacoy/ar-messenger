import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../message-service/message-service.service';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.component.html',
  styleUrls: ['./view-message.component.scss']
})
export class ViewMessageComponent implements OnInit {

  private _message: Message;
  @Input() set message(message: Message) {
      if (message) {
        this._message = message;
        this.locationPicSrc = message.message_location_image_url;
        this.usdzUrl = message.usdz_url;
      }
  }

  locationPicSrc: string;
  usdzUrl: string;
  openCameraButtonUrl = "https://macmacoy.github.io/ar-messenger/assets/buttons/OpenCameraButton.png";

  constructor() { }

  ngOnInit(): void {}

}
