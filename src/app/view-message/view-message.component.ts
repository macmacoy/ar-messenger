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
        this.quickLookTitle = encodeURIComponent(`${this._message.user.first_name}'s Tapestry`);
        this.quickLookSubTitle = encodeURIComponent('Sent with Tapestry.AR');
      }
  }

  locationPicSrc: string;
  usdzUrl: string;
  openCameraButtonUrl = "https://macmacoy.github.io/ar-messenger/assets/buttons/OpenCameraButton.png";
  quickLookTitle: string;
  quickLookSubTitle: string;
  appStoreUrl: string = "https://apps.apple.com/us/app/tapestry-ar/id1532544449";

  constructor() { }

  ngOnInit(): void {
    const linkElement = document.getElementById("ar-link");
    linkElement.addEventListener("message", function (event: MessageEvent) {   
      if (event.data == "_apple_ar_quicklook_button_tapped") {
        window.open("https://apps.apple.com/us/app/tapestry-ar/id1532544449", "_blank");
      }
    }, false);
  }

}
