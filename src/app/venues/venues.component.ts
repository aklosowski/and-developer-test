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

  venues = null;

  constructor(private fourSquareService: FoursquareService) { }

  ngOnDestroy() {

    this.unsubscribe();
  }

  submitSearch() {

    this.unsubscribe();

    this.fourSquareSubscription = this.fourSquareService.getVenueRecommendations(this.searchQuery).subscribe((response: any) => {

      console.log(response);

    }, (response: any) => {

      console.log(response);
    });
  }

  private unsubscribe(): void {

    if (this.fourSquareSubscription != null) {

      this.fourSquareSubscription.unsubscribe();
    }
  }
}
