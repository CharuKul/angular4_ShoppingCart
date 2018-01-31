import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Product } from '../Interfaces/product';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ProductsService {

  private _url: string = "/assets/frontend-challenge/data/products.json";
  private _listBrowseProduct: Product[] = [];
  private _listFilteredProduct: Product[] = [];

  productsFilled$: Subject<Product[]> = new Subject();

  constructor(private http: HttpClient) { }

  fetchProductJson(): Observable<object> {
    return this.http.get<object>(this._url);
  }

  // Called by components to fill filters
  fillProductsInfo() {
    this._listBrowseProduct = [];
    this._listFilteredProduct = [];

    this.fetchProductJson()
      .subscribe(data => {
        let pList = data["products"];

        for (var prod of pList) {
          let product = new Product();
          product.name = prod["name"];
          product.brand = prod["brand"];
          product.desc = prod["desc"];
          product.image = prod["image"];
          product.measurement = prod["measurement"];
          product.price = prod["price"];

          this.addBrowseProduct(product);
          this.addFilteredProduct(product);
        }
        this.triggerProductsFilled();
      });
  }

  // To watch products
  watchProductsFilled(): Subject<Product[]> {
    return this.productsFilled$;
  }

  triggerProductsFilled() {
    this.productsFilled$.next(this._listFilteredProduct);
  }

  addBrowseProduct(filter) {
    this._listBrowseProduct.push(filter);
  }

  addFilteredProduct(filter) {
    this._listFilteredProduct.push(filter);
  }

  getAllProducts() {
    return this._listBrowseProduct;
  }
}
