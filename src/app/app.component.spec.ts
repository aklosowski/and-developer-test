import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { VenueComponent } from './venues/venue/venue.component';
import { VenuesComponent } from './venues/venues.component';
import { FormsModule } from '../../node_modules/@angular/forms';
import { FoursquareService } from './venues/foursquare/foursquare.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { BrowserModule } from '../../node_modules/@angular/platform-browser';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
      providers: [FoursquareService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
