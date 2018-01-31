import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../interfaces/product'
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  public products = [];
  public pList: IProduct[] = [];
  constructor(private _productService: ProductsService, private _filterService: FilterService) {

    this._filterService.watchFilter()
      .subscribe(data => {
        console.log("filet" + data);
      });
  }

  ngOnInit() {

    this._productService.getProducts()
      .subscribe(data => {
        this.pList = (data["products"]);
        //= this._productService.parseProducts(this.products);
      });

    this._filterService.fillFiltersInfo("/assets/frontend-challenge/data/products.json");

  }



}
