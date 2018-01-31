import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product'
import { FilterService } from '../../services/filter.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})

export class BrowseComponent implements OnInit {

  public products = [];
  public imgPath = "assets/frontend-challenge/assets/";
  public prodList: Product[] = [];
  constructor(private _productService: ProductsService, private _filterService: FilterService
    , private _cartService: CartService) {


    // Called when filters update.
    this._filterService.watchFilter()
      .subscribe(data => {
        this.updateProductList();
      });
  }

  ngOnInit() {

    this._productService.watchProductsFilled()
      .subscribe(data => {
        this.prodList = data;
      });

    this._filterService.triggerShowFilter(true);

    this._productService.fillProductsInfo();
    this._filterService.fillFiltersInfo("/assets/frontend-challenge/data/products.json");

  }

  OnAddToCartClicked(product) {
    this._cartService.addProduct(product);
    console.log("add to cart clicked");
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
