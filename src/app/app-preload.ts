import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AppPreload implements PreloadingStrategy {
    public preload(route: Route, load: () => Observable<any>): Observable<any> {
      if (route && route.data && route.data.preload) {
        return Observable.of(true).delay(1000).switchMap(_ => load());
      }
      return Observable.of(false);
    }
}
