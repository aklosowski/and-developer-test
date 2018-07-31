import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenuesComponent } from './venues.component';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { VenueComponent } from './venue/venue.component';
import { FoursquareService } from './foursquare/foursquare.service';
import { HttpClientModule } from '@angular/common/http';

describe('VenuesComponent', () => {
  let component: VenuesComponent;
  let fixture: ComponentFixture<VenuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule
      ],
      declarations: [VenuesComponent, VenueComponent],
      providers: [FoursquareService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
