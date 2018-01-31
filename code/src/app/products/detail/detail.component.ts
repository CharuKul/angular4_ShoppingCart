import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public product = {
    "name": "NutriWell Barley",
    "price": "2.25",
    "brand": "NutriWell",
    "desc": "F&N NutriWell Barley is freshly brewed from a special home recipe using carefully selected pearl barley and dried winter melon strips. Barley, a grain full of pure goodness, is commonly used in home-brews, to make that familiar barley drink or in soups. All natural, with no added preservatives and reduced in sugar, F&N NutriWell Barley is the great-tasting, 'healthier-choice' convenient beverage to cool you down in this tropical climate. Make drinking F&N NutriWell a daily enjoyment.",
    "measurement": "1L",
    "image": "product1.jpg"
  };

  public imgPath = "assets/frontend-challenge/assets/";
  
  constructor() { }

  ngOnInit() {
  }

  getBgPath() {
    return "url('" + this.imgPath + this.product.image + "')" ;
  }


}
