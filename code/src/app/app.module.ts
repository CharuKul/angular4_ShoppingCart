import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './global/header/header.component';
import { FilterPanelComponent } from './global/filter-panel/filter-panel.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { FilterService } from './services/filter.service';
import { CartService } from './services/cart.service';
import { CommonService } from './services/common.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterPanelComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [ProductsService,
    FilterService,
    CartService,
    CommonService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
