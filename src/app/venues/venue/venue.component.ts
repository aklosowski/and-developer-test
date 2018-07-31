import { Component, Input } from '@angular/core';
import { Venue } from '../venue';

@Component({
  selector: 'venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent {

  @Input() venue: Venue;

  constructor() { }

}
