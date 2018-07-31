import { TestBed, inject } from '@angular/core/testing';

import { FoursquareService } from './foursquare.service';
import { HttpClientModule } from '@angular/common/http';

const invalidLocation = {
  "headers": {
    "normalizedNames": {},
    "lazyUpdate": null
  },
  "status": 400,
  "statusText": "OK",
  "url": "https://api.foursquare.com/v2/venues/explore?v=20180731&client_id=PX433TJQXCCPLV1PEQQJUY0WI5JD01IDPS2QZAUHVWTQ0CWS&client_secret=353N1MLTMQCFY4PQJ30PGA2JPH4RM2B4DQ5H0BTYFOTGNPAS&near=l&limit=50&offset=0",
  "ok": false,
  "name": "HttpErrorResponse",
  "message": "Http failure response for https://api.foursquare.com/v2/venues/explore?v=20180731&client_id=PX433TJQXCCPLV1PEQQJUY0WI5JD01IDPS2QZAUHVWTQ0CWS&client_secret=353N1MLTMQCFY4PQJ30PGA2JPH4RM2B4DQ5H0BTYFOTGNPAS&near=l&limit=50&offset=0: 400 OK",
  "error": {
    "meta": {
      "code": 400,
      "errorType": "failed_geocode",
      "errorDetail": "Couldn't geocode param near: l",
      "requestId": "5b60acdd1ed21965076d34f2"
    },
    "response": {}
  }
}

const networkError = {
  "headers": {
    "normalizedNames": {},
    "lazyUpdate": null,
    "headers": {}
  },
  "status": 0,
  "statusText": "Unknown Error",
  "url": null,
  "ok": false,
  "name": "HttpErrorResponse",
  "message": "Http failure response for (unknown url): 0 Unknown Error",
  "error": {
    "isTrusted": true
  }
}

const valid = {
  "meta": {
    "code": 200,
    "requestId": "5b60ace8db04f5423db8eac1"
  },
  "response": {
    "suggestedFilters": {
      "header": "Tap to show:",
      "filters": [
        {
          "name": "Open now",
          "key": "openNow"
        }
      ]
    },
    "geocode": {
      "what": "",
      "where": "london",
      "center": {
        "lat": 51.50853,
        "lng": -0.12574
      },
      "displayString": "London, Greater London, United Kingdom",
      "cc": "GB",
      "geometry": {
        "bounds": {
          "ne": {
            "lat": 51.691643999655895,
            "lng": 0.33418999705203406
          },
          "sw": {
            "lat": 51.28467404417054,
            "lng": -0.5085579279369435
          }
        }
      },
      "slug": "london",
      "longId": "72057594040571679"
    },
    "headerLocation": "London",
    "headerFullLocation": "London",
    "headerLocationGranularity": "city",
    "totalResults": 1,
    "suggestedBounds": {
      "ne": {
        "lat": 51.57330743432479,
        "lng": 0.014716730488298385
      },
      "sw": {
        "lat": 51.42780382877676,
        "lng": -0.3175485784134455
      }
    },
    "groups": [
      {
        "type": "Recommended Places",
        "name": "recommended",
        "items": [
          {
            "reasons": {
              "count": 0,
              "items": [
                {
                  "summary": "This spot is popular",
                  "type": "general",
                  "reasonName": "globalInteractionReason"
                }
              ]
            },
            "venue": {
              "id": "4ac518d2f964a52026a720e3",
              "name": "Hyde Park",
              "location": {
                "address": "Serpentine Rd",
                "lat": 51.50778087767913,
                "lng": -0.16239166259765625,
                "labeledLatLngs": [
                  {
                    "label": "display",
                    "lat": 51.50778087767913,
                    "lng": -0.16239166259765625
                  }
                ],
                "postalCode": "W2 2TP",
                "cc": "GB",
                "city": "London",
                "state": "Greater London",
                "country": "United Kingdom",
                "formattedAddress": [
                  "Serpentine Rd",
                  "Hyde Park",
                  "Greater London",
                  "W2 2TP",
                  "United Kingdom"
                ]
              },
              "categories": [
                {
                  "id": "4bf58dd8d48988d163941735",
                  "name": "Park",
                  "pluralName": "Parks",
                  "shortName": "Park",
                  "icon": {
                    "prefix": "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/park_",
                    "suffix": ".png"
                  },
                  "primary": true
                }
              ],
              "photos": {
                "count": 0,
                "groups": []
              }
            },
            "referralId": "e-0-4ac518d2f964a52026a720e3-0"
          }
        ]
      }
    ]
  }
}
describe('FoursquareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [FoursquareService]
    });
  });

  it('should be created', inject([FoursquareService], (service: FoursquareService) => {
    expect(service).toBeTruthy();
  }));

  it('should throw a location error', inject([FoursquareService], (service: FoursquareService) => {
    expect(service.getErrorFromResponse(invalidLocation)).toEqual('Unknown location');
  }));

  it('should throw an unknown error', inject([FoursquareService], (service: FoursquareService) => {
    expect(service.getErrorFromResponse(networkError)).toEqual('Something went wrong. Are you online?');
  }));

  it('should create 1 venue', inject([FoursquareService], (service: FoursquareService) => {
    expect(service.getVenuesFromResponse(valid)[0].name).toEqual('Hyde Park');
    expect(service.getVenuesFromResponse(valid)[0].address).toEqual('Serpentine Rd');
    expect(service.getVenuesFromResponse(valid)[0].categories).toEqual('Park');
  }));

  it('should create info', inject([FoursquareService], (service: FoursquareService) => {
    expect(service.getInfoFromResponse(valid)).toEqual('There are 1 recommended venues in London, Greater London, United Kingdom.');
  }));
});
