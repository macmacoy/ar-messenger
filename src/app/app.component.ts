import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageServiceService } from './message-service/message-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageServiceService]
})
export class AppComponent implements OnInit {

  messageId: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.messageId = params['id'];
    });
  }

  onActivate(componentReference) {
    componentReference.messageId = this.messageId;
    console.log(componentReference.messageId);
 }

}
