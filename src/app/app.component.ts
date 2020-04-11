import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ar-messenger';

  locationPicUrl = "https://i.kym-cdn.com/entries/icons/facebook/000/016/894/mynameehhjeff.jpg";
  usdzUrl = "https://github.com/macmacoy/ar-messenger/blob/master/src/assets/toy_drummer.usdz?raw=true";

  constructor() {}

  ngOnInit() {}

}
