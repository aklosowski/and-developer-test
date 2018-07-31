import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs/Observable';
import 'rxjs/add/observable/of';
import { secrets } from '../../foursquare.secret';

const apiUrl = 'https://api.foursquare.com/v2/venues/explore';

@Injectable()
export class FoursquareService {

  constructor(private httpClient: HttpClient) { }

  getVenueRecommendations(place: string): Observable<Object> {

    return this.httpClient.get(apiUrl, {
      params: {
        v: '20180731',
        client_id: secrets.foursquare.clientId,
        client_secret: secrets.foursquare.clientSecret,
        near: place
      }
    });
  }
}
