import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  show_cart: boolean;
  show_browse: boolean;
  constructor(private _commonService: CommonService) {
    this._commonService.watchURLChanged()
      .subscribe(data => {
        this.show_cart = true;
        this.show_browse = true;

        if (data.endsWith("cart")) {
          this.show_cart = false;
        }
        else if (data.endsWith("browse")) {
          this.show_browse = false;
        }
      });
  }

  public cssAppHeader = "app-header";

  OnCartClicked() {
    console.log("cart clciked");
  }
  OnBrowseClicked() {
    console.log("browse clciked");
  }
  ngOnInit() {
  }

}
