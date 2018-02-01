import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../Interfaces/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  // public product = {
  //   "name": "NutriWell Barley",
  //   "price": "2.25",
  //   "brand": "NutriWell",
  //   "desc": "F&N NutriWell Barley is freshly brewed from a special home recipe using carefully selected pearl barley and dried winter melon strips. Barley, a grain full of pure goodness, is commonly used in home-brews, to make that familiar barley drink or in soups. All natural, with no added preservatives and reduced in sugar, F&N NutriWell Barley is the great-tasting, 'healthier-choice' convenient beverage to cool you down in this tropical climate. Make drinking F&N NutriWell a daily enjoyment.",
  //   "measurement": "1L",
  //   "image": "product1.jpg"
  // };

  public imgPath = "assets/frontend-challenge/assets/";
  public product: Product;

  constructor(private _filterService: FilterService, private _router: Router,
    private _productService: ProductsService, private _cartService: CartService) { }

  ngOnInit() {
    this._filterService.triggerShowFilter(false);

    let prodId = this._router.url.split("detail/")[1];
    this.product = this._productService.getProduct(prodId);

    if (!this.product) {
      // To watch when products are filled
      this._productService.watchProductsFilled()
        .subscribe(data => {
          this.product = this._productService.getProduct(prodId);
        });
    }
  }

  getBgPath() {
    return "url('" + this.imgPath + this.product.image + "')";
  }

  OnAddToCartClicked(product) {
    product.addedToCart = true;
    this._cartService.addProduct(product);
  }
}

}
