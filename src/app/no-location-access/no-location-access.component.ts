import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-location-access',
  templateUrl: './no-location-access.component.html',
  styleUrls: ['./no-location-access.component.scss']
})
export class NoLocationAccessComponent implements OnInit {

  constructor() { }

  outOfRangeLogoUrl = "assets/images/TreasureMap.png"

  ngOnInit(): void {
  }

}
