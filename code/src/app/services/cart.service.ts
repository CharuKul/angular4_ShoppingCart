import { Injectable } from '@angular/core';
import { Product } from '../Interfaces/product';

@Injectable()
export class CartService {

  private _listAddedProduct: Product[] = [];
  constructor() {

  }

  addAllProducts(){
    return this._listAddedProduct;
  }

  addProduct(product) {
    if (this._listAddedProduct.includes(product)) {
      let index = this._listAddedProduct.indexOf(product);
      this._listAddedProduct[index].count++;
    }
    else {
      product.count = 0;
      this._listAddedProduct.push(product);
    }
  }
}
