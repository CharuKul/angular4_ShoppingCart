import { Injectable } from '@angular/core';
import { Filter, FilterItem } from '../Interfaces/filter';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class FilterService {

  filter$: Subject<Filter> = new Subject();
  filterFilled$: Subject<Filter[]> = new Subject();
  listFilters: Filter[] = [];

  constructor(private http: HttpClient) {
  }

  // To fetch json
  getFilters(url): Observable<object> {
    return this.http.get<object>(url);
  }

  // Called by components to fill filters
  fillFiltersInfo(url) {
    this.getFilters(url)
      .subscribe(data => {
        let pList = data["filters"];

        for (var filter of pList) {
          let filterObject = new Filter();
          filterObject.name = filter["name"];

          for (var value of filter["values"]) {
            let filterValue = new FilterItem();
            filterValue.checked = true;
            filterValue.name = value;
            filterObject.values.push(filterValue);
          }

          this.addFilter(filterObject);
        }
        this.triggerFilterFilled();
      });
  }

  // To watch filter when info filled
  watchFilterFilled(): Subject<Filter[]> {
    return this.filterFilled$;
  }

  triggerFilterFilled() {
    this.filterFilled$.next(this.listFilters);
  }

  // To watch filter updates
  watchFilter(): Subject<Filter> {
    return this.filter$;
  }

  triggerFilter(filter) {
    this.filter$.next(filter);
  }

  addFilter(filter) {
    this.listFilters.push(filter);
  }

  getfilters() {
    return this.listFilters;
  }

  updateFilterItem(filter, filterItem) {

    this.triggerFilter(filter);
  }

}
