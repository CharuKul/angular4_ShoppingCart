import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BrowseComponent } from '../../products/browse/browse.component';

const routes: Routes = [
    { path: 'browse', component: BrowseComponent },
    { path: 'detail', loadChildren: './modules/detail/detail.module#DetailModule'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    BrowseComponent
  ]
})
export class BrowseModule { }
