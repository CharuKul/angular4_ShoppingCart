import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from '../../products/detail/detail.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: DetailComponent },
  //{ path: 'detail', loadChildren: '../modules/detail/detail.module#DetailModule'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DetailComponent
  ]
})
export class DetailModule { }
