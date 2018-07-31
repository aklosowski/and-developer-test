import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VenuesComponent } from './venues/venues.component';
import { VenueComponent } from './venues/venue/venue.component';
import { FoursquareService } from './foursquare.service';


@NgModule({
  declarations: [
    AppComponent,
    VenuesComponent,
    VenueComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FoursquareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
