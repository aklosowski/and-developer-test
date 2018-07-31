import { Component, OnInit, Input } from '@angular/core';
import { Venue } from '../venue';

@Component({
  selector: 'venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent implements OnInit {

  @Input() venue: Venue;

  constructor() { }

  ngOnInit() {
  }

}
