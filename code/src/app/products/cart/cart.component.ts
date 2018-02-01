import { Component, OnInit } from '@angular/core';
import { Product } from '../../Interfaces/product';
import { CartService } from '../../services/cart.service';
import { FilterService } from '../../services/filter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: '../browse/browse.component.html',
  styleUrls: ['../browse/browse.component.css']
})
export class CartComponent implements OnInit {

  public prodList: Product[] = [];
  public imgPath = "assets/frontend-challenge/assets/";

  constructor(private _cartService: CartService, private _filterService: FilterService, private _router: Router) {
    this.prodList = this._cartService.getAllProducts();    
  }

  ngOnInit() {
    this._filterService.triggerShowFilter(false);
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
