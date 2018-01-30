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
      path: '',
      redirectTo: '',
      pathMatch: 'full'
    }
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [ ]
})
export class AppRoutingModule { }