import { Component, ChangeDetectorRef } from '@angular/core';
import { FilterService } from './services/filter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  show_filter = true;

  constructor(private _filterService: FilterService,
    private _cdr: ChangeDetectorRef) {
    this._filterService.watchShowFilter()
      .subscribe(data => {
        this.show_filter = data;
        this._cdr.detectChanges();
      });

  }
}
