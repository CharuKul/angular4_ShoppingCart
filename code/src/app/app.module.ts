import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './global/header/header.component';
import { FilterPanelComponent } from './global/filter-panel/filter-panel.component';
import { BrowseModule } from './modules/browse/browse.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterPanelComponent,
  ],
  imports: [
    BrowseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
