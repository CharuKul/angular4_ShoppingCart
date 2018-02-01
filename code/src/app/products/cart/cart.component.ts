import { Component, OnInit } from '@angular/core';
import { Product } from '../../Interfaces/product';
import { CartService } from '../../services/cart.service';
import { FilterService } from '../../services/filter.service';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-cart',
  templateUrl: '../browse/browse.component.html',
  styleUrls: ['../browse/browse.component.css']
})
export class CartComponent implements OnInit {

  public prodList: Product[] = [];
  public imgPath = "assets/frontend-challenge/assets/";
  show_addToCart: boolean = false;

  constructor(private _cartService: CartService, private _filterService: FilterService
    , private _router: Router, private _commonService: CommonService) {
    this.prodList = this._cartService.getAllProducts();    
  }

  ngOnInit() {
    this._filterService.triggerShowFilter(false);

    // To watch when url changes
    this._commonService.watchURLChanged()
      .subscribe(data => {
        if (data.endsWith("cart")) {
          this.show_addToCart = false;
        }
        else {
          this.show_addToCart = true;
        }
      });
  }

  getImgPath(product) {
    return "url('" + this.imgPath + product.image + "')";
  }  

  OnRemoveClicked(product) {
    product.addedToCart = false;
    
    if (this.prodList.includes(product)) {
      let newList = [];
      for (let item of this.prodList) {
        if (item != product) {
          newList.push(item);
        }
      }

      this.prodList = newList;
    }
    this._cartService.updateProducts(this.prodList);
  } 

  OnItemClicked(product, event) {
    if (event.target.className.indexOf("button") < 0) {
      this._router.navigate(['/detail', product.id]);
    }
  }

}
