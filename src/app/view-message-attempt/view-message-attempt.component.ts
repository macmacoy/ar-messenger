import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../message-service/message-service.service';

@Component({
  selector: 'app-view-message-attempt',
  templateUrl: './view-message-attempt.component.html',
  styleUrls: ['./view-message-attempt.component.scss']
})
export class ViewMessageAttemptComponent implements OnInit {

  inRange = true;
  messageId: string;

  constructor(private messageService: MessageServiceService) {}

  ngOnInit(): void {
    this.getMessage();
  }

  getMessage() {
    this.messageService.getMessage(this.messageId).subscribe(data => {
      console.log(data);
    });
  }

}
