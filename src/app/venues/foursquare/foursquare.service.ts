import { Injectable } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs/Observable';
import { Venue } from '../venue';
import 'rxjs/add/observable/of';

@Injectable()
export class FoursquareService {

  constructor() { }

  getVenueRecommendations(place: String): Observable<Venue[]> {

    return Observable.of([]);
  }
}
