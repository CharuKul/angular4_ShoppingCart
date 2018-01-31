import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../../products/cart/cart.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CartComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CartComponent
  ]
})

export class CartModule { }
