import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './global/header/header.component';
import { BrowseComponent } from './products/browse/browse.component';
import { DetailComponent } from './products/detail/detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BrowseComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
