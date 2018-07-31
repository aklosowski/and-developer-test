import { Component, OnInit, OnDestroy } from '@angular/core';
import { FoursquareService } from './foursquare/foursquare.service';
import { Subscription } from '../../../node_modules/rxjs/Subscription';
import { Venue } from './venue';

@Component({
  selector: 'venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.css']
})
export class VenuesComponent implements OnDestroy {

  fourSquareSubscription: Subscription = null;

  searchQuery = '';
  errorMessage = '';

  venues = null;

  constructor(private fourSquareService: FoursquareService) { }

  ngOnDestroy() {

    this.unsubscribe();
  }

  submitSearch() {

    this.unsubscribe();

    this.fourSquareSubscription = this.fourSquareService.getVenueRecommendations(this.searchQuery).subscribe((venues: Venue[]) => {

      this.venues = venues;

    }, (error: Error) => {

      this.errorMessage = error.message;
    });
  }

  private unsubscribe(): void {

    if (this.fourSquareSubscription != null) {

      this.fourSquareSubscription.unsubscribe();
    }
  }
}
