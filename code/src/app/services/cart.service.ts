import { Injectable } from '@angular/core';
import { Product } from '../Interfaces/product';

@Injectable()
export class CartService {

  private _listAddedProduct: Product[] = [];
  constructor() {
  }

  getAllProducts() {
    return this._listAddedProduct;
  }

  addProduct(product) {
    if (!this._listAddedProduct.includes(product)) {
      this._listAddedProduct.push(product);
    }
  }

  updateProducts(newList) {
    this._listAddedProduct = newList;
  }
}
