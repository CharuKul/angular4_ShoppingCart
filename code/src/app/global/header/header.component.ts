import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  public cssAppHeader = "app-header";

  OnCartClicked()
  {
    console.log("cart clciked");
  }
  OnBrowseClicked()
  {
    console.log("browse clciked");
  }
  ngOnInit() {
  }

}
