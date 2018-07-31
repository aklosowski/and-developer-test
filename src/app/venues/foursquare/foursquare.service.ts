import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs/Observable';
import 'rxjs/add/observable/of';
import { secrets } from '../../foursquare.secret';
import { Venue } from '../venue';

const apiUrl = 'https://api.foursquare.com/v2/venues/explore';

@Injectable()
export class FoursquareService {

  constructor(private httpClient: HttpClient) { }

  getVenueRecommendations(place: string, page: number): Observable<Object> {

    return this.httpClient.get(apiUrl, {
      params: {
        v: '20180731',
        client_id: secrets.foursquare.clientId,
        client_secret: secrets.foursquare.clientSecret,
        near: place,
        limit: '50',
        offset: (50 * page).toString()
      }
    });
  }

  getVenuesFromResponse(response: object): Venue[] {

    let venues: Venue[] = [];

    let venueObjects = response['response']['groups'][0]['items'] as object[];

    venueObjects.forEach(o => {

      let address = o['venue']['location']['address'];
      let name = o['venue']['name'];
      let categoriesNamesList = [];
      let catList = o['venue']['categories'] as object[];
      catList.forEach(c => categoriesNamesList.push(c['name']));
      let categories = categoriesNamesList.join(', ');
      let v = new Venue(name, address, categories);

      venues.push(v);
    });

    return venues;
  }

  getInfoFromResponse(response: object): string {

    let info = '';

    if (response['response']['warning']) {

      info = 'WARNING: ' + response['response']['warning']['text'] + ' ';
    }

    info += 'There are ' + response['response']['totalResults']
      + ' recommended venues in '
      + response['response']['geocode']['displayString'] + '.';

    return info;
  }

  getPagesNumberFromResponse(response: object): number {

    return parseInt(response['response']['totalResults']) / 50 +
      (parseInt(response['response']['totalResults']) % 50 > 0 ? 1 : 0);
  }

  getErrorFromResponse(response: object): string {

    if (response['error'] && response['error']['meta']) {

      switch (response['error']['meta']['errorType']) {
        case ('failed_geocode'):
          return 'Unknown location';
        // TODO: Add other error codes
        default:
          return response['error']['meta']['errorDetail'];
      }
    } else {

      return 'Something went wrong. Are you online?';
    }
  }
}
