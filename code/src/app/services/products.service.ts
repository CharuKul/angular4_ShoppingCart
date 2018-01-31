import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductsService {

  private _url: string = "/assets/frontend-challenge/data/products.json";
  constructor(private http: HttpClient) { }

  getProducts() : Observable<object> {
     return this.http.get<object>(this._url);
  }
}
