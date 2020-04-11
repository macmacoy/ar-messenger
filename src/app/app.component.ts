import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ar-messenger';

  locationPicUrl = "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/fetch/Category_Pages/Kitchen/Countertops_and_Backsplashes/countertops-hero-mob3.jpg";
  usdzUrl = "https://developer.apple.com/augmented-reality/quick-look/models/biplane/toy_biplane.usdz";
  openCameraButtonUrl = "https://i0.wp.com/css-tricks.com/wp-content/uploads/2018/05/button.jpg?ssl=1";

  constructor() {}

  ngOnInit() {}

}
