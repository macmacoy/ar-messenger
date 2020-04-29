import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../message-service/message-service.service';
import { Message } from '../message-service/message-service.service';

@Component({
  selector: 'app-view-message-attempt',
  templateUrl: './view-message-attempt.component.html',
  styleUrls: ['./view-message-attempt.component.scss']
})
export class ViewMessageAttemptComponent implements OnInit {

  inRange = true;
  messageId: string;
  message: Message;

  constructor(private messageService: MessageServiceService) {}

  ngOnInit(): void {
    this.setMessage();
  }

  setMessage() {
    this.messageService.getMessage(this.messageId).subscribe(message => {
      this.message = message;
    });
  }

}
