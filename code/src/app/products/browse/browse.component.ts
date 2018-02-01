import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../Interfaces/product'
import { FilterService } from '../../services/filter.service';
import { CartService } from '../../services/cart.service';
import { CommonService } from '../../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})

export class BrowseComponent implements OnInit {

  public products = [];
  public imgPath = "assets/frontend-challenge/assets/";
  public prodList: Product[] = [];
  show_addToCart: boolean = true;

  constructor(private _productService: ProductsService, private _filterService: FilterService
    , private _cartService: CartService, private _commonService: CommonService, private _router: Router) {

    // Called when filters update.
    this._filterService.watchFilter()
      .subscribe(data => {
        this.updateProductList();
      });
  }

  ngOnInit() {

    // To watch when products are filled
    this._productService.watchProductsFilled()
      .subscribe(data => {
        this.prodList = data;
      });

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

    this._filterService.triggerShowFilter(true);

    this._productService.fillProductsInfo();
    this._filterService.fillFiltersInfo("/assets/frontend-challenge/data/products.json");

  }

  OnAddToCartClicked(product) {
    product.addedToCart = true;
    this._cartService.addProduct(product);
  }

  OnItemClicked(product, event) {
    if (event.target.className.indexOf("button") < 0) {
      this._router.navigate(['/detail', product.id]);
    }
  }

  getImgPath(product) {
    return "url('" + this.imgPath + product.image + "')";
  }

  updateProductList() {
    this.prodList = [];
    let filteredProdList = [];
    let origProdList = this._productService.getAllProducts();
    let filtersList = this._filterService.getListOfFilters();

    this.prodList = origProdList.slice(0);

    // Loop for diff category of filters
    for (let filter of filtersList) {

      // Loop for products
      for (let prod of this.prodList) {

        // Loop for each item of filter
        for (let value of filter.values) {

          if (filter.name.toLowerCase() == "brand" && prod.brand == value.name && value.checked) {
            filteredProdList.push(prod);
          }

          else if (filter.name.toLowerCase() == "price") {
            let minPrice = parseFloat(value.name.split('-')[0]);
            let maxPrice = parseFloat(value.name.split('-')[1]);
            if (prod.price >= minPrice && prod.price <= maxPrice && value.checked) {
              filteredProdList.push(prod);
            }
          }
        }
      }

      this.prodList = filteredProdList.slice(0);
      filteredProdList = [];
    }

  }

}
