import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VenuesComponent } from './venues/venues.component';
import { VenueComponent } from './venues/venue/venue.component';
import { FoursquareService } from './venues/foursquare/foursquare.service';


@NgModule({
  declarations: [
    AppComponent,
    VenuesComponent,
    VenueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FoursquareService],
  bootstrap: [AppComponent],
  exports: [VenueComponent]
})
export class AppModule { }
