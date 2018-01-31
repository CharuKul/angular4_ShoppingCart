import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { Filter } from '../../Interfaces/filter';

@Component({
  selector: 'filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.css']
})
export class FilterPanelComponent implements OnInit {

  items: Filter[] = [];

  constructor(private _filterService: FilterService) {
    // this.items = [
    //   {
    //     name: "brand",
    //     values: ["NutriWell", "MARIGOLD", "Marigold", "Meiji"]
    //   },
    //   {
    //     name: "price",
    //     values: ["0-0.99", "1-1.99", "2-2.99"]
    //   }
    // ]

    this._filterService.watchFilterFilled()
      .subscribe(data => {
        console.log("filet data" + data);
        this.items = data;
      });
  }

  public cssAppFilter = "app-filter";

  ngOnInit() {

  }

  UpdateFilters(filter, item) {
    item.checked = !item.checked;
    this._filterService.triggerFilter(filter);
  }

}
