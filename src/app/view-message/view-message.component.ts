import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.component.html',
  styleUrls: ['./view-message.component.scss']
})
export class ViewMessageComponent implements OnInit {

  locationPicUrl = "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/fetch/Category_Pages/Kitchen/Countertops_and_Backsplashes/countertops-hero-mob3.jpg";
  // usdzUrl = "https://developer.apple.com/augmented-reality/quick-look/models/biplane/toy_biplane.usdz";
  usdzUrl = "https://macmacoy.github.io/ar-messenger/assets/usdz/ToyDrummer.usdz";
  openCameraButtonUrl = "https://macmacoy.github.io/ar-messenger/assets/buttons/OpenCameraButton.png";

  constructor() { }

  ngOnInit(): void {
  }

}
