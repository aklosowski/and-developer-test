import { Component, OnInit, OnDestroy } from '@angular/core';
import { FoursquareService } from './foursquare/foursquare.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.css']
})
export class VenuesComponent implements OnDestroy {

  fourSquareSubscription: Subscription = null;

  searchQuery = '';
  errorMessage = '';
  info = '';

  searchQueryLast = '';
  page = 0;

  pagesNo = 0;

  venues = null;

  constructor(private fourSquareService: FoursquareService) { }

  ngOnDestroy() {

    this.unsubscribe();
  }

  submitSearch() {

    this.page = 0;
    this.searchQueryLast = this.searchQuery;
    this.search();
  }

  private search() {

    if (this.searchQueryLast.trim().length > 0) {

      this.errorMessage = '';
      this.unsubscribe();

      this.fourSquareSubscription =
        this.fourSquareService.getVenueRecommendations(this.searchQueryLast, this.page)
          .subscribe((response: object) => {

            this.info = this.fourSquareService.getInfoFromResponse(response);
            this.venues = this.fourSquareService.getVenuesFromResponse(response);
            this.pagesNo = this.fourSquareService.getPagesNumberFromResponse(response);
            this.errorMessage = '';

          }, (response: object) => {

            this.venues = null;
            this.errorMessage = this.fourSquareService.getErrorFromResponse(response);
          });

    } else {

      this.errorMessage = 'Please provide a location';
    }
  }

  private unsubscribe(): void {

    if (this.fourSquareSubscription != null) {

      this.fourSquareSubscription.unsubscribe();
    }
  }

  pageChange(n: number) {
    this.page += n;
    this.search();
  }
}
