import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";

const routes: Routes = [
    {
        path: 'browse',
        loadChildren: './modules/browse/browse.module#BrowseModule'
    },
    {
        path: 'detail/:id',
        loadChildren: './modules/detail/detail.module#DetailModule'
    },
    {
        path: 'cart',
        loadChildren: './modules/cart/cart.module#CartModule'
    },
    {
        path: '',
        redirectTo: '/browse',
        pathMatch: 'full'
    }
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forRoot(routes)
    ],
    declarations: []
})
export class AppRoutingModule { }