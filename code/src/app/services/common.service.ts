import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CommonService {


  urlChanged$: Subject<string> = new Subject();

  constructor(private _router: Router) {

    this._router.events.subscribe((res) => {
      this.triggerURLChanged(this._router.url);
    });
  }

  // To watch current route
  watchURLChanged(): Subject<string> {
    return this.urlChanged$;
  }

  triggerURLChanged(data) {
    this.urlChanged$.next(data);
  }

}
