import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesAlertsComponent } from './bikes-alerts.component';

describe('BikesAlertsComponent', () => {
  let component: BikesAlertsComponent;
  let fixture: ComponentFixture<BikesAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikesAlertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikesAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
