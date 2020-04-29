import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../message-service/message-service.service';

@Component({
  selector: 'app-out-of-range',
  templateUrl: './out-of-range.component.html',
  styleUrls: ['./out-of-range.component.scss']
})
export class OutOfRangeComponent implements OnInit {

  @Input() message: Message;

  outOfRangeLogoUrl = "https://macmacoy.github.io/ar-messenger/assets/images/TreasureMap.png"

  constructor() { }

  ngOnInit(): void {
  }

}
