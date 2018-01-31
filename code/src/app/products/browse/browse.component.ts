import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product'
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  public products = [];
  public imgPath = "assets/frontend-challenge/assets/";
  public pList: Product[] = [];
  constructor(private _productService: ProductsService, private _filterService: FilterService) {

    this._filterService.watchFilter()
      .subscribe(data => {
        console.log("filet" + data);
      });
  }

  ngOnInit() {

    this._productService.watchProductsFilled()
      .subscribe(data => {
        this.pList = data;
      });

    this._productService.fillProductsInfo();
    this._filterService.fillFiltersInfo("/assets/frontend-challenge/data/products.json");

  }

  OnAddToCartClicked() {
    console.log("add to cart clicked");
  }

  getImgPath(product) {
    return "url('" + this.imgPath + product.image + "')";
  }

}
