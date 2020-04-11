import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-out-of-range',
  templateUrl: './out-of-range.component.html',
  styleUrls: ['./out-of-range.component.scss']
})
export class OutOfRangeComponent implements OnInit {

  outOfRangeLogoUrl = "https://macmacoy.github.io/ar-messenger/assets/treasure_map.png"

  constructor() { }

  ngOnInit(): void {
  }

}
